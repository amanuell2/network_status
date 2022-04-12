import React, { useEffect, useState } from 'react';
import Card from './Card';
import throttle from 'lodash.throttle';
import { useMemo } from 'react';
import useThrottledEffect from '../hooks/useThrottledEffect';

const Container = () => {
  const [connections, setConnections] = useState({});
  const [parsedConnections, setParsedConnections] = useState<any>({});

  const dataParser = (key: string, _object: any, _status: boolean) => {
    const parsed = { ..._object };
    parsed[key].status = _status;
    return parsed;
  };

  useEffect(() => {
    // fetch from api
    const fetchData = async () => {
      const response = await fetch(
        'https://app.subsocial.network/subid/api/v1/chains/properties'
      );
      const data = await response.json();
      setConnections(data);
    };
    fetchData();
  }, []);

  const getNetworkStatus = () => {
    for (const key in connections) {
      fetch(`https://app.subsocial.network/subid/api/v1/check/${key}`)
        .then((response) => response.json())
        .then((itemStatus) => {
          setParsedConnections(dataParser(key, connections, itemStatus));
        });
    }
  };

  useThrottledEffect(()=>{
    getNetworkStatus();
  }, 50000 ,[parsedConnections]);
  


  return (
    <div className="w-full h-full flex flex-col justify-center items-center  py-4 px-2">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-start">
        {Object.keys(parsedConnections).map((key: string) => {
          
          return (
            <Card
              key={key}
              icon={parsedConnections[key].icon}
              name={parsedConnections[key].name}
              tokenSymbol={parsedConnections[key].tokenSymbol}
              tokenDecimals={parsedConnections[key].tokenDecimals}
              status={parsedConnections[key].status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
