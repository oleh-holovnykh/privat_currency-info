import React, { useState } from 'react'
import { CopyButton } from '../../components/CopyButton';
import { Schedule } from '../../components/Schedule';
import { createSchedule } from '../../helpers/сreateSchedule';
import modules from '../../data/offlineModuleSchedule.json';
import practices from '../../data/offlinePracticeSchedule.json';
import retreats from '../../data/onlineRetreatSchedule.json';
import ie from '../../data/individualEntrepreneur.json';

export const OfflineCourse: React.FC = () => {
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(true);

  const handleRequisitesClick = () => {
    setShowRequisites(!showRequisites);

    if (showSchedule) {
      setShowSchedule(!showSchedule);
    }
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);

    if (showRequisites) {
      setShowRequisites(!showRequisites);
    }
  };

  const nextGropuDate = new Date(createSchedule(modules, practices,retreats).filter(group => group.type === 'module')[0].startDate);
  const nextGrupDateToPrint = `${nextGropuDate.getDate().toString().padStart(2, '0')}.${(nextGropuDate.getMonth() + 1).toString().padStart(2, '0')}`

  return (
    <>
      <div className='text-center mb-2'>
        <span className='mb-2 block'>
          <b>Модуль:</b> 6000 грн
        </span>
        <span className='mb-2 block'>
          <b>Група практики:</b> 800 грн 
        </span>
        <div className='mb-2'>
          <button
            onClick={handleRequisitesClick}
            className={`mr-2 text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
              showRequisites ? 'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
            }`}
          >
            {showRequisites ? 'Cховати реквізити' : 'Показати реквізити'}
          </button>

          <button
            onClick={handleScheduleClick}
            className={`text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
              showSchedule ?  'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
            }`}
          >
            {showSchedule ? 'Cховати розклад' : 'Показати розклад'}
          </button>
        </div>

      </div>
        {showRequisites && (
          <div className='text-left w-max mt-2 mx-auto text-gray-600'>
            <b>За модуль</b>
            <br/>
            {ie.recipient} <CopyButton value={ie.recipient} />
            <br />
            IBAN: {ie.iban} <CopyButton value={ie.iban} />
            <br />
            ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
            <br />
            Акціонерне товариство: {ie.bank} <CopyButton value={ie.bank} />
            <br />
            МФО: {ie.mfo} <CopyButton value={ie.mfo} />
            <br />
            ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
            <br />
            <br />
            🔸Призначення платежу:
            <br />
            {`"За навчання ${nextGrupDateToPrint}"`} <CopyButton value={`За навчання ${nextGrupDateToPrint}`} /> 
            <br />
            <br />
            🔥Важливо вказати призначення платежу
            <br />
            🔥Важливо, щоб платіж був від фізособи.
            <br />А не від ФОП, чи організації
            <br/>
            <br/>
            <b>За групу практики</b>
            <br/>
            <b>Олег:</b> 5363542102236842 <CopyButton value={'5363542102236842'} />
            <br/>
            <b>Марія:</b>
            <br/>
            ФОП РУДЬ МАРІЯ МИКОЛАЇВНА <CopyButton value={'ФОП РУДЬ МАРІЯ МИКОЛАЇВНА'} />
            <br />
            IBAN: UA073052990000026003025005897 <CopyButton value={'UA073052990000026003025005897'} />
            <br />
            ІПН/ЄДРПОУ: 3236319307 <CopyButton value={'3236319307'} />
            <br />
            МФО: 305299 <CopyButton value={'305299'} />
            <br />
            Рахунок отримувача: 26003025005897 <CopyButton value={'26003025005897'} />
            <br />
            🔸Призначення платежу:
            <br />
            {`"За консультаційні послуги"`} <CopyButton value={`За консультаційній послуги`} /> 
            <br/>

          </div>
        )}
      
        {showSchedule && (<div className='flex justify-center items-center'>
        <div className='w-[350px] text-gray-600'>
          <Schedule 
            modules={modules}
            practices={practices}
            retreats={retreats}
          />
        </div>
      </div>)}
      
    </>
  );
}
