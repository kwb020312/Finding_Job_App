import React from "react";
import { ListItem, Left, Text, Right, Icon, Body, Button } from "native-base";
import { Actions } from "react-native-router-flux";

function Items({ job }) {
  // 상세 이동시 넘겨줄 props 는 라우터에 인자로 넘기면 된다.
  const moveDetail = () => {
    Actions.Detail({ job });
  };

  return (
    <ListItem>
      <Left>
        <Body>
          <Text>{job.CMPNY_NM}</Text>
          <Text note numberOfLines={2} style={{ marginTop: 15 }}>
            {job.HOPE_WAGE}
          </Text>
        </Body>
      </Left>
      <Right>
        <Button onPress={moveDetail} transparent>
          <Icon name="arrow-forward" />
        </Button>
      </Right>
    </ListItem>
  );
}

export default Items;
