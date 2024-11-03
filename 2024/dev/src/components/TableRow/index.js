import React from "react";
import _ from "lodash";

import TableTime from "../TableTime";
import TableTalk from "../TableTalk";
import './styles.css';

export default ({ start, end, rest, talks, isWorkshop, programs, onClickTopic }) => {

  //state = { programs: []};

  const renderTalks = _.map(talks, ({ id, topic, presenter, presenter2, description, room, tags, programId, vodURL, hackmdURL }) => {
    // console.log(presenter)
    const program = programs ? programs.find(function (element) {
      return element.id === programId;
    }) : null

    // var speaker = ""
    // program ? program.speakers.map(({ name, bio }) => {
    //   speaker += (name + " ")

    // }) : (speaker = null)

    if (presenter === undefined || presenter === null || presenter === null) {
      return null
    }
    return (
      <TableTalk
        key={id}
        topic={program ? program.title : topic}
        presenter={presenter}
        presenter2={presenter2}
        description={program ? program.abstract : description}
        room={room}
        tags={tags}
        program={program}
        isWorkshop={isWorkshop}
        programId={programId}
        onClickTopic={onClickTopic}
        vodURL={vodURL}
        hackmdURL={hackmdURL}
      />)
  });
  // console.log(Array.isArray(renderTalks))
  // console.log(renderTalks.length)
  return (
    <li className="schedule_row">
      <TableTime start={start} end={end} />
      {rest ? (
        <div className="schedule_rest_container">
          {rest}
        </div>
      ) : (renderTalks.length !== 1 ?
        <div className="schedule_talk_container" style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {renderTalks}
        </div> :
        <div className="schedule_talk_container">
          {renderTalks}
        </div>
        )}
    </li>
  );
};
