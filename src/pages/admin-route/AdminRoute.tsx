import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  fetchAddAdmin,
  fetchDeactivateAdmin,
  fetchGetRules,
  fetchSetRules,
} from 'api/admins'
import {
  Button,
  Container,
  IconButton,
  Input,
  Panel,
  PanelGroup,
  Placeholder,
  Stack,
  Table,
  Tree,
} from 'rsuite'
import ImageIcon from '@rsuite/icons/Image'
import SearchIcon from '@rsuite/icons/Search'
import { fetchAdmins } from 'api/users'

const { Column, HeaderCell, Cell } = Table
const ImageCell = ({ rowData, dataKey, ...props }: any) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        background: '#f5f5f5',
        borderRadius: 6,
        margin: 2,
        overflow: 'hidden',
        display: 'inline-block',
      }}
    >
      <img src={rowData.avatarFull} width="40" />
    </div>
  </Cell>
)

function AdminRoute() {
  const treeRef = React.useRef()
  const [adminSteamId, setAdminSteamId] = useState(0)
  const [rulesOptionsList, setRulesOptionsList] = useState('')

  const { data: adminsList } = useQuery(['admin-steamIds'], fetchAdmins)

  const addAdminMutation = useMutation(() => fetchAddAdmin(adminSteamId))
  const deactivateAdminMutation = useMutation(() =>
    fetchDeactivateAdmin(adminSteamId)
  )
  const setRulesOptionsListMutation = useMutation(() =>
    fetchSetRules(JSON.parse(rulesOptionsList))
  )

  const { data: optionsData } = useQuery(['options'], fetchGetRules)

  const handleAddAdmin = (steamId: any) => {
    addAdminMutation.mutate()
  }

  const handleDeactivateAdmin = (steamId: any, name: string) => {
    const alertMessage = confirm(`Деактивировать админа ${name}?`)
    if (alertMessage) {
      setAdminSteamId(steamId)
      deactivateAdminMutation.mutate()
    } else {
      return
    }
  }

  const handleSendRulesOptionsList = (rules: any) => {
    setRulesOptionsListMutation.mutate()
  }

  return (
    <Container style={{ maxWidth: 1400, margin: '0 auto' }}>
      <PanelGroup accordion defaultActiveKey={1} bordered>
        <Panel header="Управление админами" eventKey={1} id="panel1">
          <Stack
            spacing={8}
            alignItems="flex-start"
            style={{ marginBottom: '1rem' }}
          >
            <Input
              maxLength={17}
              value={adminSteamId}
              onChange={(e: any) => setAdminSteamId(e)}
              placeholder="Введите steamId"
            />
            {adminSteamId.toString().length > 16 && (
              <IconButton
                size="md"
                href={`http://steamcommunity.com/profiles/${adminSteamId}`}
                target="_blank"
                icon={<SearchIcon />}
              />
            )}
            <Button
              onClick={handleAddAdmin}
              appearance="subtle"
              color="green"
              disabled={adminSteamId.toString().length < 17}
            >
              Добавить
            </Button>
          </Stack>
          <Table
            defaultExpandAllRows={true}
            autoHeight
            data={adminsList}
            onRowClick={(rowData) => {
              console.log(rowData)
            }}
          >
            <Column width={44}>
              <HeaderCell>
                <ImageIcon style={{ width: 20, height: 20 }} />
              </HeaderCell>
              <ImageCell dataKey="avatarFull" />
            </Column>

            <Column width={180}>
              <HeaderCell>Никнейм</HeaderCell>
              <Cell dataKey="name" />
            </Column>

            <Column width={180}>
              <HeaderCell>SteamId</HeaderCell>
              <Cell dataKey="steamId" />
            </Column>

            <Column>
              <HeaderCell>Роль</HeaderCell>
              <Cell dataKey="role" />
            </Column>

            <Column width={200}>
              <HeaderCell>Дата добавления</HeaderCell>
              <Cell>
                {(rowData) =>
                  `${new Date(rowData.createTime).toLocaleString()}`
                }
              </Cell>
            </Column>
            <Column width={200}>
              <HeaderCell>Дата последнего изменения</HeaderCell>
              <Cell>
                {(rowData) =>
                  `${new Date(rowData.modifiedTime).toLocaleString()}`
                }
              </Cell>
            </Column>
            <Column flexGrow={1} fixed="right" align="center">
              <HeaderCell>...</HeaderCell>

              <Cell style={{ padding: '8px', alignItems: 'center' }}>
                {(rowData) => (
                  <Button
                    appearance="subtle"
                    color="red"
                    size="sm"
                    onClick={() =>
                      handleDeactivateAdmin(rowData.steamId, rowData.name)
                    }
                  >
                    Деактивировать
                  </Button>
                )}
              </Cell>
            </Column>
          </Table>
        </Panel>
        <Panel header="Управление опциями" eventKey={2} id="panel2">
          <Stack
            spacing={8}
            alignItems="flex-start"
            style={{ marginBottom: '1rem' }}
          >
            <Input
              onChange={(e: any) => setRulesOptionsList(e)}
              placeholder="Скопируйте данные сюда"
            />
            <Button
              onClick={handleSendRulesOptionsList}
              appearance="subtle"
              color="green"
              disabled={rulesOptionsList.toString().length <= 0}
            >
              Добавить
            </Button>
          </Stack>
        </Panel>
        <Panel header="Panel 3" eventKey={3} id="panel3">
          <Placeholder.Paragraph />
        </Panel>
      </PanelGroup>
    </Container>
  )
}

export default AdminRoute
