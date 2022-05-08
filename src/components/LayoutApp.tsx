import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Menu, Typography, Button, Badge, Select, } from 'antd';
import { CopyrightCircleOutlined, FullscreenOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import { goTo } from 'react-chrome-extension-router';
import ReverseShell from './linux/ReverseShell';
import PhpReverseShell from './web/PhpReverseShell';
import TtySpawnShell from './linux/TtySpawnShell';
import Base64Encode from './encoding/DataEncoding';
import Hashing from './encoding/Hashing';
import LinuxCommands from './linux/LinuxCommands';
import PowershellCommands from './linux/PowershellCommands';
import LFI from './web/LFI';
import XSS from './web/XSS';
import SQLi from './web/SqlInjection';
import FeedRSS from './rss/FeedRSS';
import FileTransfer from './file_transfer/File_transfer';
import PersistedState from 'use-persisted-state';
import MSFBuilder from './linux/MSFBuilder';
import DynamicTheme from '../theming';
import { themes } from '../themes';
import EchoBase64 from './file_transfer/ObfuscatedFiles';

const { Paragraph } = Typography;
const { Sider, Content, Footer } = Layout;
const IconFont = createFromIconfontCN( {
    scriptUrl: [ './iconfont.js' ]
} );

const defaultTheme = themes[ 0 ];
const options = themes.map( ( theme ) => ( {
    label: theme.displayName,
    value: theme.id
} ) );

export default function LayoutApp ( props: {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
} ) {

    const useDefaultTheme = PersistedState<string>( 'default_colored_theme' );
    const [ themeId, setThemeId ] = useDefaultTheme( defaultTheme.id );
    const selectThemeId = useCallback(
        ( option ) => setThemeId( option as string ),
        []
    );

    interface IRouterComponent {
        key: string;
        icon: JSX.Element;
        name: string;
        componentRoute: React.FunctionComponent;
    }

    const Tabs: Array<IRouterComponent> = [
        {
            key: '1',
            icon: <IconFont type='icon-gnubash' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'Reverse Shell',
            componentRoute: ReverseShell
        },
        {
            key: '2',
            icon: <IconFont type='icon-php' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'PHP Reverse Shell',
            componentRoute: PhpReverseShell
        },
        {
            key: '3',
            icon: <IconFont type='icon-lvzhou_yuanchengTelnet' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'TTY Spawn Shell',
            componentRoute: TtySpawnShell
        },
        {
            key: '4',
            icon: <IconFont type='icon-linux' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'Useful Linux commands',
            componentRoute: LinuxCommands
        },
        {
            key: '5',
            icon: (
                <Badge dot size='default' style={{ transform: `translate(3px, 5px)` }}>
                    <IconFont type='icon-powershell' style={{ fontSize: '1.5em', marginTop: 3 }} />
                </Badge>
            ),
            name: 'PowerShell Commands',
            componentRoute: PowershellCommands
        },
        {
            key: '6',
            icon: <IconFont type='icon-transfer' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'Transfer Methods',
            componentRoute: FileTransfer
        },
        {
            key: '7',
            icon: <IconFont type='icon-l-file' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'LFI',
            componentRoute: LFI
        },
        {
            key: '8',
            icon: <IconFont type='icon-js' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'XSS',
            componentRoute: XSS
        },
        {
            key: '9',
            icon: (
                <Badge dot size='default' style={{ transform: `translate(3px, 5px)` }}>
                    <IconFont type='icon-sql' style={{ fontSize: '1.5em', marginTop: 3 }} />
                </Badge>
            ),
            name: 'SQL Injection',
            componentRoute: SQLi
        },
        {
            key: '10',
            icon: <IconFont type='icon-jiemaleixing' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'Data Encoding',
            componentRoute: Base64Encode
        },
        {
            key: '11',
            icon: (
                <Badge dot size='default' style={{ transform: `translate(3px, 5px)` }}>
                    <IconFont type='icon-Encode-File' style={{ fontSize: '1.5em', marginTop: 3 }} />
                </Badge>
            ),
            name: 'Obfuscated Files or Information',
            componentRoute: EchoBase64
        },
        {
            key: '12',
            icon: <IconFont type='icon-hash' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'Hashing',
            componentRoute: Hashing
        },
        {
            key: '13',
            icon: <IconFont type='icon-Cloud' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'Feed RSS',
            componentRoute: FeedRSS
        },
        /* {
            key: '13',
            icon: (
                <Badge dot size='default' style={{ transform: `translate(3px, 5px)` }}>
                    <IconFont type='icon-http' style={{ fontSize: '1.5em', marginTop: 3 }} />
                </Badge>
            ),
            name: 'HTTP Repeater',
            componentRoute: HTTPUtils
        }, */
        {
            key: '14',
            icon: <IconFont type='icon-shield' style={{ fontSize: '1.5em', marginTop: 3 }} />,
            name: 'MSF Builder',
            componentRoute: MSFBuilder
        }
    ];

    const MenuItemsLists = Tabs.map( ( item ) => (
        <Menu.Item style={{ overflow: 'hidden' }} key={item.key} icon={item.icon} onClick={() => navigate( item )}>
            {item.name}
        </Menu.Item>
    ) );

    const useMenuIndex = PersistedState<string>( 'tab_index_cache' ); // Disabled for now
    const [ index, setIndex ] = useMenuIndex( '1' );

    const navigate = ( { componentRoute, key }: { componentRoute: React.FunctionComponent; key: string } ) => {
        goTo( componentRoute );
        setIndex( key );
    };

    const windowMode = () => {
        const width = 1100;
        const height = 800;

        chrome.windows.create( {
            url: chrome.extension.getURL( 'index.html' ),
            width: width,
            height: height,
            type: 'popup'
        } );
    };

    useEffect( () => {
        const currentComponent = Tabs.filter( ( obj ) => obj.key === index )[ 0 ].componentRoute;
        goTo( currentComponent );
    }, [] );

    const target = window.location.href;
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsed={true}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    right: 0
                }}
            ><a href="https://51pwn.com" target="_blank"><div className='logo'>
                <img width="45" src="https://51pwn.com/img/ico.jpg"/></div></a>
                <Menu theme='dark' defaultSelectedKeys={[ index ]} mode='inline'>
                    {MenuItemsLists}
                </Menu>
            </Sider>
            <Layout className='site-layout' style={{ marginRight: 80 }}>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
                <DynamicTheme themes={themes} value={themeId} />
            </Layout>
        </Layout>
    );
}
