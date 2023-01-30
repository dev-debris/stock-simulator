import styled from '@emotion/styled';
import {useState} from 'react';
import ResumeBox from './ResumeBox';

function Resume() {
  const [resumes, setResumes] = useState([
    {id: 0, text: '드래그앤드롭', index: 0},
    {id: 1, text: 'dnd제발', index: 1},
    {id: 2, text: '너무어려워ㅜㅜ', index: 2},
  ]);

  const findResume = id => {
    const resume = resumes.filter(c => c.id === id)[0];
    const index = resumes.indexOf(resume);
    return {
      resume,
      index,
    };
  };

  const moveResume = (id, toIndex) => {
    const {resume, index} = findResume(id);
    let newResumes = resumes;
    newResumes = newResumes.splice(index, 1).splice(toIndex, 0, resume);
    setResumes(newResumes);
  };

  return (
    <Wrapper>
      <ResumeBlock>
        {resumes.map((resume, i) => (
          <ResumeBox
            id={resume.id}
            text={resume.text}
            index={resume.index}
            key={i}
            moveResume={moveResume}
            findResume={findResume}
          />
        ))}
      </ResumeBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 740px;
  height: 100%;
`;

const ResumeBlock = styled.div`
  padding: 40px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Resume;
