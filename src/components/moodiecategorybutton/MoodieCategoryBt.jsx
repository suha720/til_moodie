import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MoodieCategoryBtnWrap,
  MoodieCategoryMainBtn,
  MoodieCategoryMainBtnWrap,
  MoodieCategorySubBtn,
  MoodieCategorySubBtnWrap,
} from "../../pages/moodie/MoodieRecord.style";

function MoodieCategoryBt() {
  //js
  const [activeMain, setActiveMain] = useState(1);
  const [activeSub, setActiveSub] = useState(0);
  const navigate = useNavigate();

  const handleClickMain = (index, route) => {
    setActiveMain(index);
    navigate(route);
  };
  const handleClickSub = (index, route) => {
    setActiveSub(index);
    navigate(route);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/record") {
      setActiveMain(1);
      setActiveSub(0);
    } else if (location.pathname === "/allrecord") {
      setActiveMain(1);
      setActiveSub(1);
    } else if (location.pathname === "/add") {
      setActiveMain(0);
    }
  }, [location.pathname]);

  //jsx
  return (
    <MoodieCategoryBtnWrap>
      <MoodieCategoryMainBtnWrap>
        <MoodieCategoryMainBtn
          isActive={activeMain === 0}
          onClick={() => handleClickMain(0, "/add")}
        >
          작성하기
        </MoodieCategoryMainBtn>
        <MoodieCategoryMainBtn
          isActive={activeMain === 1}
          onClick={() => handleClickMain(1, "/record")}
        >
          기록 보기
        </MoodieCategoryMainBtn>
      </MoodieCategoryMainBtnWrap>
      <MoodieCategorySubBtnWrap>
        <MoodieCategorySubBtn
          isActive={activeSub === 0}
          onClick={() => handleClickSub(0, "/record")}
        >
          주간 기록
        </MoodieCategorySubBtn>
        <MoodieCategorySubBtn
          isActive={activeSub === 1}
          onClick={() => handleClickSub(1, "/allrecord")}
        >
          전체 기록
        </MoodieCategorySubBtn>
      </MoodieCategorySubBtnWrap>
    </MoodieCategoryBtnWrap>
  );
}

export default MoodieCategoryBt;
