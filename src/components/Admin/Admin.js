import React, { useState } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { useForm } from "react-hook-form";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import AddBooks from "../AddBooks/AddBooks";
import ManageBooks from "../ManageBooks/ManageBooks";

const Admin = () => {
  const { path, url } = useRouteMatch();

  function Topic() {
    let { topicId } = useParams();

    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="col-md-4">
        <ul>
          <h3>
            <Link to={`${url}/manage-books`}>Manage Books</Link>
          </h3>
          <h3>
            <Link to={`${url}/add-books`}>Add Book</Link>
          </h3>
        </ul>
      </div>

      <div className="col-md-8">
        <Switch>
          <Route path={`${path}/manage-books`}>
            <ManageBooks />
          </Route>
          <Route path={`${path}/add-books`}>
            <AddBooks />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
