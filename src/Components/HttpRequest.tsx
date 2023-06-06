import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSuccess, fetchDataFailure } from '../actions';

interface ResponseItem {
  [key: string]: any;
}

const HttpRequestComponent: React.FC = () => {
  const [requestData, setRequestData] = useState('');
  const responseData: ResponseItem[] = useSelector((state: any) => state.responseData);
  const dispatch = useDispatch();

  const handleRequest = async () => {
    try {
      const response = await fetch(requestData);
      const data = await response.json();
      if (Array.isArray(data)) {
        dispatch(fetchDataSuccess(data));
      } else {
        dispatch(fetchDataSuccess([data]));
      }
    } catch (error) {
      console.log('Error:', error);
      dispatch(fetchDataFailure());
    }
  };

  return (
    <div className='http-request'>
      <input
        type="text"
        value={requestData}
        onChange={(e) => setRequestData(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleRequest}>Fetch Data</button>
      <table>
        <thead>
          <tr>
            {responseData.length > 0 &&
              Object.keys(responseData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {responseData.map((item: ResponseItem, index: number) => (
            <tr key={index}>
              {Object.values(item).map((value: any, index: number) => (
                <td key={index}>{JSON.stringify(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HttpRequestComponent;
