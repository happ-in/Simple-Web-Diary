import { addMonths, differenceInCalendarDays, endOfMonth, isSunday, startOfMonth, subMonths, addDays, startOfWeek, endOfWeek, isSaturday } from "date-fns";
import  React, { useMemo, useState }  from "react";
import { format } from "date-fns";
import '../css/Calendar.css';

export const Calendar = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    const [currMonth, setCurrMonth] = useState(new Date());
    
    /**
     * useMemo에서 memo는 memorization
     * 프로그램이 동일한 계산 반복해야 할 때, 이전 계산한 값을 메모리에 저장.
     * 캘린더의 경우는 이전 또는 이후 달을 조회하는 경우가 많기 때문에 메모리에 값을 저장하여 메모리에 넣고 재사용하는 것이 성능상 좋다.
     * 캘린더와 같이 일정하게 입력값이 유지되는 경우에 유용하며 액세스마다 값이 변경되는 경우에는 오히려 성능 저하.
     * 물론, case by case
     */
    const createMonth = useMemo(() => {
        const monthArr = [];

        const monthStart = startOfMonth(currMonth); // 현재 달의 시작 날짜
        const monthEnd = endOfMonth(currMonth); // 현재 달의 마지막 날짜
        
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        let row = [];
        let day = startDate;
        while (differenceInCalendarDays(endDate, day) >= 0) {
            if ((startDate !== day) && isSunday(day)) {
                monthArr.push(row);
                row = [];
            }
            row.push(day);
            day = addDays(day, 1);
        }

        if (row.length > 0) {
            monthArr.push(row);
        }

        return monthArr;
    });

    const nextMonthHandler = () => {
        setCurrMonth(addMonths(currMonth, 1));
    };
    const prevMonthHandler = () => {
        setCurrMonth(subMonths(currMonth, 1));
    };

    return (
        <div> 
            <div>
                <div className="cal-header"> 
                    <button className="arrow-prev" onClick={prevMonthHandler}/>
                    <span>{format(currMonth, "yyyy년 ")}</span>
                    <span>{format(currMonth, "M월")}</span>
                    <button className="arrow-next" onClick={nextMonthHandler}/>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {days.map((day, i) => {
                                let style;
                                if (i === 0) {
                                    style = { color : "red"};
                                } else if (i === 6) {
                                    style = { color : "blue"};
                                }

                                return (
                                    <th key={i} style={style}>{ day }</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {createMonth.map((week) => {
                            return (
                            <tr>
                                {week.map((day) => {
                                    let style;
                                    if (isSunday(day)) {
                                        style = { color : "red"};
                                    } else if (isSaturday(day)) {
                                        style = { color : "blue"};
                                    }   

                                    return (
                                        <th style={style}>{format(day, "d")}</th>
                                    )
                                })}
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar;