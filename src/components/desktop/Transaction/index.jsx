import React from 'react';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Transaction(props) {
    const { type, receptor, number, timestamp, ammount, img } = props;

    const textColor = type === 'Recibido' ? 'text-green-500' : 'text-red-500';
    const dateString = new Date(timestamp).toLocaleString();
    const iconType = type === 'Recibido' ? <FontAwesomeIcon className="text-green-600" icon={faArrowDown} /> : <FontAwesomeIcon className="text-red-600" icon={faArrowUp} />;

    return (
        <section className="flex flex-col sm:flex-row w-full justify-between items-center border-b-2 border-gray-300">
            <div className="w-full sm:w-1/3 grow flex justify-start py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="mr-6 relative">
                        <img className="w-10 h-10 object-cover rounded-full" src={img} alt="" />
                        <FontAwesomeIcon className={`${type === 'Recibido' ? 'text-green-500' : 'text-red-500'} absolute right-0 bottom-0`} icon={faCircle} />
                    </div>
                    <div className="flex flex-col font-medium text-gray-800">
                        <b className="text-lg">{receptor}</b>
                        <span className="font-light text-sm bgtext-gray-400">
                            {iconType} {type}
                        </span>
                    </div>
                </div>
            </div>

            <div className="hidden w-1/3 md:flex justify-center py-4 whitespace-nowrap">
                <div className="text-left text-base font-semibold"># {number}</div>
            </div>

            <div className="w-full sm:w-1/3 justify-start flex sm:justify-end py-4 whitespace-nowrap">
                <div className={`font-bold flex flex-col ${textColor}`}>
                    <span className="font-normal text-lg">
                        <b className="text-xl">{type === 'Recibido' ? '+' : '-'}</b> {ammount}
                    </span>
                    <span className="font-light text-base text-gray-400">{dateString}</span>
                </div>
            </div>
        </section>
    );
}
=======
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
>>>>>>> 1f281368acc7dfb00a632a26715d5c7626922d82
