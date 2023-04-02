import React, { useEffect, useState } from 'react'
import config from '../../../../config.json'
import styles from './TerminalPage.module.scss'
// @ts-ignore
import AnsiParser from 'ansi-parser'
import socket from '../../../api/socket'
import { Button, ButtonGroup, Input, Stack, IconButton } from 'rsuite'
import ReloadIcon from '@rsuite/icons/Reload'
import OffIcon from '@rsuite/icons/Off'

function TerminalPage() {
  const [commend, setCommend] = useState<any>('')
  const [commendList, setCommendList] = useState<any[]>([])

  useEffect(() => {
    socket.emit('terminal')

    socket.on('message', (data) => {
      setCommendList((currentState) => [...currentState, JSON.parse(data)])
    })

    return () => {
      disconnectSSH()
    }
  }, [])

  // вынести команды как то отдельно чтобы небыло ререндера

  const onSend = () => {
    let data = { method: 'command', command: commend }
    socket.send(JSON.stringify(data))
    setCommend('')
  }

  const onSendCommand = (text: string) => {
    let data = { method: 'command', command: text }
    socket.send(JSON.stringify(data))
    setCommend('')
  }

  const ctrlC = () => {
    socket.emit('ctrl_c')
  }

  const disconnectSSH = () => {
    socket.emit('disconnect-ssh')
  }

  const clearTerminal = () => {
    onSendCommand('clear')
    setCommendList([])
  }

  console.log('commendList', commendList)

  return (
    <div>
      <div>
        <Stack spacing={5}>
          <Input
            type="text"
            value={commend}
            onChange={(e) => setCommend(e)}
            placeholder="Введите команду"
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                onSend()
              }
            }}
          />
          <ButtonGroup>
            <Button onClick={() => onSendCommand(config.pm2_logs_back1)}>
              Back 1 logs
            </Button>
            <Button
              onClick={() =>
                onSendCommand(config.pm2_logs_back1 + ' --lines 300')
              }
            >
              300
            </Button>
            <IconButton
              onClick={() => onSendCommand(config.pm2_restart_back1)}
              icon={<ReloadIcon />}
              appearance="primary"
              color="blue"
            />
            <IconButton
              onClick={() => onSendCommand(config.pm2_stop_back1)}
              icon={<OffIcon />}
              appearance="primary"
              color="red"
            />
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => onSendCommand(config.pm2_logs_back2)}>
              Back 2 logs
            </Button>
            <Button
              onClick={() =>
                onSendCommand(config.pm2_logs_back2 + ' --lines 300')
              }
            >
              300
            </Button>
            <IconButton
              onClick={() => onSendCommand(config.pm2_restart_back2)}
              icon={<ReloadIcon />}
              appearance="primary"
              color="blue"
            />
            <IconButton
              onClick={() => onSendCommand(config.pm2_stop_back2)}
              icon={<OffIcon />}
              appearance="primary"
              color="red"
            />
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => onSendCommand(config.pm2_logs_reshala)}>
              Reshala logs
            </Button>
            <Button
              onClick={() =>
                onSendCommand(config.pm2_logs_reshala + ' --lines 150')
              }
            >
              150
            </Button>
            <IconButton
              onClick={() => onSendCommand(config.pm2_restart_reshala)}
              icon={<ReloadIcon />}
              appearance="primary"
              color="blue"
            />
            <IconButton
              onClick={() => onSendCommand(config.pm2_stop_reshala)}
              icon={<OffIcon />}
              appearance="primary"
              color="red"
            />
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => onSendCommand(config.pm2_logs_vip)}>
              Vip logs
            </Button>
            <IconButton
              onClick={() => onSendCommand(config.pm2_restart_vip)}
              icon={<ReloadIcon />}
              appearance="primary"
              color="blue"
            />
            <IconButton
              onClick={() => onSendCommand(config.pm2_stop_vip)}
              icon={<OffIcon />}
              appearance="primary"
              color="red"
            />
          </ButtonGroup>
          <Button onClick={() => ctrlC()}>CTRL+C</Button>
          <Button onClick={() => clearTerminal()}>Clear</Button>
        </Stack>
      </div>
      <div className={styles.terminalData}>
        {commendList?.map((list, i) => {
          return (
            <div className={styles.row} key={i}>
              {AnsiParser.removeAnsi(list.data)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TerminalPage
