import { addMonths, differenceInCalendarDays, endOfDay, getMonth, isSaturday, isSunday, startOfDay, subMonths } from "date-fns";
import  React, { useCallback, useMemo, useState }  from "react";

export const Calendar = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    const [currMonth, setCurrMonth] = useState(new Date());
    const monthStart = startOfDay(currMonth); // 현재 달의 시작 날짜
    const monthEnd = endOfDay(currMonth); // 현재 달의 마지막 날짜

    /**
     * useMemo에서 memo는 memorization
     * 프로그램이 동일한 계산 반복해야 할 때, 이전 계산한 값을 메모리에 저장.
     * 캘린더의 경우는 이전 또는 이후 달을 조회하는 경우가 많기 때문에 메모리에 값을 저장하여 메모리에 넣고 재사용하는 것이 성능상 좋다.
     * 캘린더와 같이 일정하게 입력값이 유지되는 경우에 유용하며 액세스마다 값이 변경되는 경우에는 오히려 성능 저하.
     * 물론, case by case
     */
    const createMonth = useMemo(() => {
        const monthArr = [];
        let day = monthStart;
        while (differenceInCalendarDays(monthEnd, day) >= 0) {
            monthArr.push(day);
            day = addDays(day, 1); // 1일씩 증가
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
                <div>이전버튼</div>
                <span>년</span>
                <span>월</span>
                <div>이후버튼</div>
            </div>
            <table>
                <thead>
                    <tr>
                        {days.map((day, i) => (
                            <th key={i}>{ day }</th>
                        ))}
                    </tr>
                </thead>
            </table>
            <div>
                {createMonth.map((val, i) => {
                    let style;
                    const validation = getMonth(currMonth) === getMonth(val);
                    const today = format(new Date(), "yyyyMMdd") === format(v, "yyyyMMdd");

                    if (validation && isSaturday(v)) {
                        style = { color : "blue "};
                    }
                    else if (validation && isSunday(v)) {
                        style = { color : "red" }
                    }
                    return (
                        <div key={`date${i}`} style={style}>
                            <span> {format(v, "d")} </span>
                            <span> {today} </span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Calendar;