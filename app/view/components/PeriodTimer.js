import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import theme from '../../constants/theme';

export const PeriodTimer = ({ startTime }) => {
    // State to hold the current time
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      // Set an interval to update the current time every second
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  
    // Calculate the difference between the start time and the current time
    const diff = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
  
    // Calculate the remaining time for each 45-minute period
    const period1Remaining = 45 * 60 - (diff % (45 * 60));
    const period2Remaining = 45 * 60 - ((diff - 45 * 60) % (45 * 60));
    const period3Remaining = 45 * 60 - ((diff - 2 * 45 * 60) % (45 * 60));
    const period4Remaining = 45 * 60 - ((diff - 3 * 45 * 60) % (45 * 60));
  
    // Format the remaining time for each period in hours, minutes, and seconds
    const formatTime = (time) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
    // Render the component with the formatted remaining time for each period
    return (
      <View>
        <Text>Period 1 Remaining: {formatTime(period1Remaining)}</Text>
        <Text>Period 2 Remaining: {formatTime(period2Remaining)}</Text>
        <Text>Period 3 Remaining: {formatTime(period3Remaining)}</Text>
        <Text>Period 4 Remaining: {formatTime(period4Remaining)}</Text>
      </View>
    );
  };
  
  