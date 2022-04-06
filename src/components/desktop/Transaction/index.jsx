import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Transaction(props) {

  const { type, receptor, number, timestamp, ammount } = props;
  const textColor = type === 'Recibido' ? 'text-green-500' : 'text-red-500';
  const dateString = new Date(timestamp).toLocaleDateString();
  const iconType = type === 'Recibido'
    ? (<FontAwesomeIcon className="text-green-600" icon={faArrowDown} />)
    : (<FontAwesomeIcon className="text-red-600" icon={faArrowUp} />)

  return (
    <tr>
      <td className="py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-800">
            {receptor}
            <br />
            <span className="font-light text-gray-400">{dateString}</span>
          </div>
        </div>
      </td>
      <td className="py-4 whitespace-nowrap">
        <div className="text-left">{number}</div>
      </td>
      <td className="py-4 whitespace-nowrap">
        <div className={`font-bold flex flex-col justify-items-end ${textColor}`}>
          <span className="font-normal text-lg">{ammount}</span>
          <span className="font-light text-sm bgtext-gray-400">{iconType} {type}</span>
        </div>
      </td>
  </tr>
  )
}