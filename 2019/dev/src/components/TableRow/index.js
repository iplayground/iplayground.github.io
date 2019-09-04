import React from "react";
import _ from "lodash";

import TableTime from "../TableTime";
import TableTalk from "../TableTalk";
import './styles.css';

export default ({ start, end, rest, talks, isWorkshop, onClickTopic }) => {
  
  //state = { programs: []};

  const renderTalks = _.map(talks, ({ id, topic, presenter, description, room, tags }) => (
    <TableTalk
      key={id}
      topic={topic}
      presenter={presenter}
      description={description}
      room = {room}
      tags = {tags}
      isWorkshop = {isWorkshop}
      onClickTopic={onClickTopic}
      
    />
  ));

  return (
    <li className="sechdule_row">
      <TableTime start={start} end={end} />
      {rest ? (
        <div  className="sechdule_talk_container" style={{textAlign: "center",fontWeight: "bold",alignItems : "center", justifyContent: "center",color:"#666666"}}>
          {rest}
        </div>
      ) : (
        <div className="sechdule_talk_container">
        {renderTalks}
        </div>
      )}
    </li>
  );
};
