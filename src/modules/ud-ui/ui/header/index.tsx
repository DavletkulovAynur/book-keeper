import React, { memo } from "react";
import { Layout, Button, theme } from "antd";

const { Header: AntdHeader } = Layout;
const Header = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        // onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </AntdHeader>
  );
});

export { Header };
