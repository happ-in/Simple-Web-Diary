import { useLocation } from "react-router-dom";
import "../css/Schedule.css";
import { useState } from "react";


export const Schedule = () => {
    const location = useLocation();
    const selectDate = {...location.state };
    
    let [memoSize, setMemoSize] = useState(0);
    const [memo, setMemo] = useState("");

    const memoSizeHandler = (e) => {
        if (e.target.value.length > 100) {
            setMemo(e.target.value.substr(e.target.value, 100))
            return
        }
        setMemoSize(e.target.value.length);
        setMemo(e.target.value)
    }

    return (
        <div>
            {/* 헤더 */}
            <div>{selectDate.year}년 {selectDate.month}월 {selectDate.day}일</div>
            <div className="schedule-container">
                {/* ToDo List */}
                <div className="todo-container">
                    <div>
                        <div>
                            <span className="title">ToDo List</span>
                            <span className="add-btn">+ 추가</span>
                        </div>
                    </div>
                </div>

                <div className="sth-container">
                    {/* Memo */}
                    <div className="memo-container">
                        <div>
                            <span className="title">Memo</span>
                        </div>
                        <div>
                            <textarea 
                                value={memo}
                                maxLength={100} 
                                onChange={memoSizeHandler}
                                placeholder="100자 이내의 간단한 메모를 남겨보세요. &#13;Enter치면 저장됩니다."></textarea>
                            <div className="add-btn">
                                <span>{memoSize}</span>
                                <span>/100자</span>
                            </div>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div>
                        <span className="title">Schedule</span>
                        <span className="add-btn">+ 추가</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;