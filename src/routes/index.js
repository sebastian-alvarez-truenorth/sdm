import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, PrivateLayout } from "components/common";
import Dashboard from "pages/dashboard";
import { Page, List, Form } from "pages/examples";
import Main from "pages/main";

const Routes = () => {
  return (
    <Switch>
      <Route path="/examples/page">
        <PrivateLayout>
          <Page />
        </PrivateLayout>
      </Route>
      <Route path="/examples/list">
        <PrivateLayout>
          <List />
        </PrivateLayout>
      </Route>
      <Route path="/examples/form">
        <PrivateLayout>
          <Form />
        </PrivateLayout>
      </Route>
      <Route path="/dashboard">
        <PrivateLayout>
          <Dashboard />
        </PrivateLayout>
      </Route>
      <Route path="/">
        <Layout>
          <Main />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
