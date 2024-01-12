import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { useEffect, useState } from 'react';
import { TimePickerUIProps } from '@/lib/type';

const TimePickerUI = (props: TimePickerUIProps) => {
  const { formik, mode } = props;
  const [time, setTime] = useState<any>();

  useEffect(() => {
    if (mode === "create") {
      setTime(dayjs(Date.now()));
    } else if (formik.values.time !== "") {
      setTime(dayjs(formik.values.time));
    }
  }, [formik.values.time, mode]);


  return (
    <>
      {time && (
        <TimePicker
          defaultValue={time ? time : dayjs(Date.now())}
          style={{ width: "100%" }}
          use12Hours
          format="h:mm a"
          onChange={(time, timeString) => formik.setFieldValue('time', time)}
        />
      )}
    </>

  );
};

export default TimePickerUI;
