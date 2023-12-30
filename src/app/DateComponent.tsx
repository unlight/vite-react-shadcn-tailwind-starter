import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import { Dayjs } from 'dayjs';

export function DateComponent() {
  const [date, setDate] = useState<Dayjs | null>(null);
  // const [messageApi, contextHolder] = message.useMessage();
  const handleChange = value => {
    // messageApi.info(
    //   `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`,
    // );
    setDate(value);
  };
  return (
    <div>
      <DatePicker onChange={handleChange} />
      Selected Date: {date?.format('YYYY-MM-DD') || 'None'}
      {/*{contextHolder}*/}
    </div>
  );
}
