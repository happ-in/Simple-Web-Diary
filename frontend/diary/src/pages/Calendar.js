// import { addMonths, differenceInCalendarDays, endOfMonth, getMonth, isSaturday, isSunday, startOfMonth, subMonths, addDays, startOfWeek, endOfWeek } from "date-fns";
import { addMonths, differenceInCalendarDays, endOfMonth, isSunday, startOfMonth, subMonths, addDays, startOfWeek, endOfWeek } from "date-fns";
import  React, { useCallback, useMemo, useState }  from "react";
import { format } from "date-fns";

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

        return monthArr;
    });

    const nextMonthHandler = useCallback(() => {
        setCurrMonth(addMonths(currMonth, 1));
    });
    const prevMonthHandler = () => {
        setCurrMonth(subMonths(currMonth, 1));
    };

    return (
        <div> 
            <div>
                <div>
                    <button onClick={prevMonthHandler}>이전버튼</button>
                </div>
                <span>년</span>
                <span>월</span>
                <div>
                    <button onClick={nextMonthHandler}>이후버튼</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {days.map((day, i) => (
                            <th key={i}>{ day }</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {createMonth.map((week) => {
                        return (
                        <tr>
                            {week.map((day) => ( 
                                <th>{format(day, "d")}</th> 
                            ))}
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
            </div>
        </div>
    )
}

export default Calendar;