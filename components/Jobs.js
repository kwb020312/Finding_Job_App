import React, { useEffect, useState } from "react";
import * as API from "../api/Works";
import { Container, Header, Content, List, Body, Title } from "native-base";
import Items from "./Items";

function Jobs() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await API.getWorks();
      setJobList(res.GetJobInfo.row);
    };

    getList();
  }, []);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Find your Job!</Title>
        </Body>
      </Header>
      <Content>
        <List
          dataArray={jobList}
          renderRow={(job) => {
            return <Items key={job.JO_REGIST_NO} job={job} />;
          }}
        />
      </Content>
    </Container>
  );
}

export default Jobs;
