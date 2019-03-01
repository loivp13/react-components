import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = function() {
  function getTime(dateObj) {
    return dateObj.toString().slice(0, 15);
  }
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={getTime(faker.date.past())}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={getTime(faker.date.past())}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={getTime(faker.date.past())}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
