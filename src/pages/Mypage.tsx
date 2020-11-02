import React, { useState } from "react";
import Layout from "../components/layout";
import styled, { css } from "styled-components";
import viewport from "../constants/viewport";
import Button from "../components/UI/Button";
import colors from "../constants/colors";
import { Icon } from "../lib/images";
import Input from "../components/UI/Input";
import PData from "../components/views/viewproblem";
import WData from "../components/views/viewWorkbook";

import { useHistory } from "react-router-dom";


type What = "나만의 문제" | "나만의 문제집" | "공유된 자료";

function Mypage() {
  const [what, setwhat] = useState<What>("나만의 문제");
  const [whatsearch, setSearch] = useState("problem");
  return (
    <Layout>
      <Wrap>
        <div className="select_form">
          <Button
            color={colors.primary}
            back={colors.white}
            hov={colors.gray}
            onClick={() => setwhat("나만의 문제")}
            className={what === "나만의 문제" ? "click" : ""}
          >
            나만의 문제
          </Button>
          <Button
            color={colors.primary}
            back={colors.white}
            hov={colors.gray}
            onClick={() => setwhat("나만의 문제집")}
            className={what === "나만의 문제집" ? "click" : ""}
          >
            나만의 문제집
          </Button>
          <Button
            color={colors.primary}
            back={colors.white}
            hov={colors.gray}
            onClick={() => setwhat("공유된 자료")}
            className={what === "공유된 자료" ? "click" : ""}
          >
            공유된 자료
          </Button>
        </div>

        <SelectPData set={what}>
          <div className="set_data_sort">
            <div className="select_data">
              <input id="dpb" type="radio" name="pb" onChange={e => setSearch(e.target.checked ? "problem" : "workbooks")} checked={whatsearch === "problem"} />
              <label htmlFor="dpb">문제</label>
              <input id="dpbs" type="radio" name="pb" onChange={e => setSearch(e.target.checked ? "workbooks" : "problem")} checked={whatsearch === "workbooks"} />
              <label htmlFor="dpbs">문제집</label>
            </div>
            <div className="searchBox">
              <Input type="text" />
              <button><img src={Icon.search} alt="" /></button>
            </div>
          </div>
          {what !== "공유된 자료" ? <Results set={what} /> : <SearchResults select={whatsearch} />}
        </SelectPData>
      </Wrap>
    </Layout>
  );
}
interface ResultsType {
  set: What;
}

function Results({ set }: ResultsType) {
  const history = useHistory();
  function clickPb() {
    history.replace("/viewproblem" + "/title");
  }
  function clickWb() {
    history.replace("/viewworkbook" + "/title");
  }
  if (set !== "나만의 문제집")
    return (
      <ResultWrap>
        <div onClick={clickPb}>
          <PData title="다음이 있을때 이것을 구하시오" size="medium" estext />
        </div>
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
        <PData title="title" size="medium" />
      </ResultWrap>
    );
  else
    return (
      <ResultWrap workbook>
        {/* <div>testsetstset</div> */}
        <div onClick={clickWb}>
          <WData size="small" title="이건 꼭푼다 스벌" />
        </div>
        <WData size="small" title="이건 꼭푼다 스벌" />
        <WData size="small" title="이건 꼭푼다 스벌" />
        <WData size="small" title="이건 꼭푼다 스벌" />

      </ResultWrap>
    )

}
interface SearchResultsType {
  select: string;
}
const SearchResults = ({ select }: SearchResultsType) => {
  const history = useHistory();
  function clickPb() {
    history.replace("/viewproblem" + "/title");
  }
  function clickWb() {
    history.replace("/viewworkbook" + "/title");
  }
  if (select === "problem")
    return (
      <ResultWrap>
        <div onClick={clickPb}>
          <PData title="다음이 있을때 이것을 구하시오" size="medium" estext />
        </div>
      </ResultWrap>
    )
  else
    return (
      <ResultWrap workbook>
        <div onClick={clickWb}>
          <WData size="small" title="이건 꼭푼다 스벌" />
        </div>
      </ResultWrap>
    )
}
const Wrap = styled.div`
  max-width: ${viewport.desktop};
  padding: 0px 40px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 76px);
  & > .select_form {
    max-width: 300px;
    width: 100%;
    height: 100%;
    max-height: 95%;
    border: 1px solid ${colors.gray};
    border-right:none;
    & > .click {
      background: ${colors.gray};
      border: ${colors.gray};
      color: ${colors.white};
    }
  }
`;

const SelectPData = styled.div<ResultsType>`    
    width: 100%;
    display:flex;
    flex-direction: column;
    border-left:none;
    border: 1px solid ${colors.gray};
    height: 100%;
    max-height: 95%;

    & > .set_data_sort {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      position: relative;
      border-bottom: 1px solid ${colors.gray};
      &>.select_data{
        ${({ set }) => set !== "공유된 자료" && css`
        display:none;
        `}
        position: absolute;
        left:1%;
        &>label{
          margin-right:10px;
        }
      }
      &>.searchBox{
        display:flex;
        background: ${colors.border};
        border-radius:20px;
        &>img{
          margin-right: 10px;
        }
      }      
    }
`;

const ResultWrap = styled.div<{ workbook?: boolean }>`
      height: calc(100% - 50px);
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      overflow-y:scroll;
      ${({ workbook }) => workbook && css`
        flex-flow: column nowrap;
        justify-content:none;
      `}
`;

export default Mypage;