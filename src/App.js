import React, { useRef } from 'react';
import './App.css';
import { ConfigProvider, Layout, Space, Typography, Menu, Row, Col, Button } from 'antd';
import ImageGallery from 'react-image-gallery';
import useScrollSpy from 'react-use-scrollspy';

ConfigProvider.config({
	theme: {
		primaryColor: '#00c292',
	},
});

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const App: React.FC = () => {
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
	];

	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -300,
	});

	const onMenuSelectScroll = (item) => {
		switch (item.key) {
			case "Overview":
				sectionRefs[0].current.scrollIntoView();
				break;
			case "Features":
				sectionRefs[1].current.scrollIntoView();
				break;
			case "Download":
				sectionRefs[2].current.scrollIntoView();
				break;
			default:
				console.error("Unexpected menu key", item.key);
		}
	}

	return (
			<Layout style={{ minHeight: "100vh" }}>
				<Header className={activeSection === 0 ? "" : "shadow"} style={{ display: "flex", position: "fixed", zIndex: 1000, width: "100%", gap: "1rem" }}>
					<div className="logo" onClick={() => sectionRefs[0].current.scrollIntoView()}>
						<Space>
							<img height="40px" alt="logo" src={require('./images/rdpcloud.png')} />
							RDPCloud
						</Space>
					</div>
					<Menu
						style={{ overflow: "hidden", flexGrow: 1, justifyContent: "flex-end" }}
						theme="light"
						mode="horizontal"
						items={[
							{key: "Overview", label: "Overview"},
							{key: "Features", label: "Features"},
							{key: "Download", label: "Download"},
						]}
						selectedKeys={activeSection === 0 ? ["Overview"] : activeSection === 1 ? ["Features"] : activeSection === 2 ? ["Download"] : []}
						onSelect={onMenuSelectScroll}
					/>	
				</Header>

				<Content style={{ maxWidth: "80vw", margin: "auto", marginTop: "128px" }}>
					<section style={{ textAlign: "center", scrollMargin: "128px" }} ref={sectionRefs[0]}>
						<Title>RDPCloud</Title>
						<Title level={2} style={{ fontWeight: "lighter" }}>RDP Control Panel</Title>
						<Paragraph>
							Simple & Innovative<br/>Designed to simplify the process of RDP Control for hosting providers and users
						</Paragraph>
						<div style={{ maxWidth: "80%", margin: "auto", marginTop: "50px" }}>
							<ImageGallery
								items={[
									{
										original: require('./images/admin-view.png'),
										thumbnail: require('./images/admin-view.png'),
										description: "Admin View"
									},
									{
										original: require('./images/admin-list-users.png'),
										thumbnail: require('./images/admin-list-users.png'),
										description: "Admin: List Users"
									},
									{
										original: require('./images/admin-get-quota-state.png'),
										thumbnail: require('./images/admin-get-quota-state.png'),
										description: "Admin: Get Quota State"
									},
									{
										original: require('./images/admin-set-quota-state.png'),
										thumbnail: require('./images/admin-set-quota-state.png'),
										description: "Admin: Set Quota State"
									},
									{
										original: require('./images/admin-get-quota-state-2.png'),
										thumbnail: require('./images/admin-get-quota-state-2.png'),
										description: "Admin: Get Quota State (2)"
									},
									{
										original: require('./images/admin-initiate-system-shutdown.png'),
										thumbnail: require('./images/admin-initiate-system-shutdown.png'),
										description: "Admin: Initiate System Shutdown"
									},
									{
										original: require('./images/user-view.png'),
										thumbnail: require('./images/user-view.png'),
										description: "User View"
									},
									{
										original: require('./images/user-get-user-info.png'),
										thumbnail: require('./images/user-get-user-info.png'),
										description: "User: Get User Info"
									},
									{
										original: require('./images/user-get-uptime.png'),
										thumbnail: require('./images/user-get-uptime.png'),
										description: "User: Get Uptime"
									},
									{
										original: require('./images/whmcs-product.png'),
										thumbnail: require('./images/whmcs-product.png'),
										description: "WHMCS Module: Product"
									},
									{
										original: require('./images/whmcs-service-admin.png'),
										thumbnail: require('./images/whmcs-service-admin.png'),
										description: "WHMCS Module: Service (Admin)"
									},
									{
										original: require('./images/whmcs-service-client.png'),
										thumbnail: require('./images/whmcs-service-client.png'),
										description: "WHMCS Module: Service (Client)"
									},
									{
										original: require('./images/login.png'),
										thumbnail: require('./images/login.png'),
										description: "Login"
									},
								]}
							/>
						</div>
					</section>

					<section style={{ textAlign: "left", scrollMargin: "64px" }} ref={sectionRefs[1]}>
						<Title style={{ textAlign: "center", marginTop: "64px", padding: "50px 0" }} level={3}>Features</Title>
						<Row gutter={[16, 16]}>
							<Col sm={24} md={8}>
								<Title level={4}>Portable</Title>
								<Paragraph>
									RDPCloud is portable, works out of the box, and requires zero configuration
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>Secure by Design</Title>
								<Paragraph>
									RDPCloud is built with security in mind, all network requests are encrypted, and every core functionality is hardened and designed based on the principles of security by design
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>Easy to Integrate</Title>
								<Paragraph>
									RDPCloud comes with free plugins for easy integration with extensible software, such as WHMCS
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>User Management</Title>
								<Paragraph>
									RDPCloud lets you manage users (create, modify, delete, etc.) and their local groups (add user to local group, remove user from local group, etc.)
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>Quota Management</Title>
								<Paragraph>
									RDPCloud lets you manage disk quotas (enable disk quota, set default disk quota, disable disk quota, etc.) and disk quota entries (set disk quota entry, delete disk quota entry, etc.)
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>WinAPI Support</Title>
								<Paragraph>
									RDPCloud can be extended to support any Windows functionality exposed via WinAPI
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>Client/Server Approach</Title>
								<Paragraph>
									RDPCloud, unlike other solutions, adopts the client/server approach, giving you more flexibility and control
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>Developer Friendly</Title>
								<Paragraph>
									RDPCloud, being developer friendly, uses Protocol Buffers, making it easier to communicate with RDPCloud Server in any supported language
								</Paragraph>
							</Col>
							<Col sm={24} md={8}>
								<Title level={4}>Cross-Platform</Title>
								<Paragraph>
									RDPCloud Client is cross-platform and runs on Linux, Windows, and macOS. RDPCloud Server runs on Windows only
								</Paragraph>
							</Col>
						</Row>
					</section>

					<section style={{ textAlign: "center", scrollMargin: "64px" }} ref={sectionRefs[2]}>
						<Title level={3} style={{ marginTop: "64px", padding: "50px 0" }}>Download</Title>
						<Title level={4} style={{ marginTop: 0}}>Standard Version</Title>
						<div>
							<span style={{ fontSize: "3rem" }}>$99</span>
							<span style={{ fontSize: "1rem" }}>/per server</span>
						</div>
						<Paragraph style={{ fontSize: ".75rem", fontWeight: "bolder" }}>
							One-Time Fee - Lifetime License
						</Paragraph>
						<Paragraph>
							Ideal for personal use and SMBs
						</Paragraph>
						<div style={{ paddingTop: "20px" }}>
							<Paragraph>
								Get a 30-Days Free Trial 
							</Paragraph>
							<Button type="primary" size="large" href="https://t.me/s77rt" target="_blank" rel="noopener noreferrer">Contact via Telegram</Button>
						</div>
					</section>
				</Content>

				<Footer style={{ textAlign: "center", marginTop: "64px", }}>
					{"Copyright © " + new Date().getFullYear() + " RDPCloud. All Rights Reserved"}
				</Footer>
			</Layout>
		)
	}

export default App;
