import React from 'react'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { RefineThemes, useNotificationProvider } from '@refinedev/antd';
import { Authenticated, ErrorComponent ,Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier
} from "@refinedev/react-router-v6"
import { App as AntApp, ConfigProvider } from 'antd';
import "@refinedev/antd/dist/reset.css"

const App = () => {
  return (
    <div>App</div>
  )
}

export default App