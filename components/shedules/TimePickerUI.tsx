import type { Dayjs } from 'dayjs';
import { TimePicker } from 'antd';
import { useState } from 'react';
const TimePickerUI = ({ formik }: any) => {
  return (
    <TimePicker style={{ width: "100%" }} use12Hours format="h:mm a" onChange={(time, timeString) => formik.setFieldValue('time', timeString)} />
  )
}

export default TimePickerUI
