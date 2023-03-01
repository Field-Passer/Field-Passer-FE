import { getReportsList } from '@src/api/request';
import { useState, useEffect } from 'react';
import Report from './Report';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { ok, reportsListData } = await getReportsList('2023-02-28', '2023-03-01');
      if (ok) {
        setReports(reportsListData.resultData);
      }
    };
    fetchData();
  });
  return (
    <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <colgroup>
        <col className='w-auto' />
        <col className='w-auto' />
        <col className='w-auto' />
        <col className='w-[250px]' />
      </colgroup>
      <thead className='text-sm text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='px-6 py-4 text-left'>
            카테고리
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            신고자
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            피신고자
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            처리 상태
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            관리
          </th>
        </tr>
      </thead>
      <tbody>
        {reports.length > 0 ? (
          reports.map((report) => <Report item={report} />)
        ) : (
          <tr className='border-t-[1px] border-solid border-field bg-white text-center '>
            <td colSpan={5} className='h-8 align-middle'>
              작성한 글이 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Reports;
