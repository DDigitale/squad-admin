import React, { useLayoutEffect, useState } from 'react'
import EditIcon from '@rsuite/icons/Edit'
import CheckOutlineIcon from '@rsuite/icons/CheckOutline'
import AddOutlineIcon from '@rsuite/icons/AddOutline'
import CloseOutlineIcon from '@rsuite/icons/CloseOutline'
import styles from './AdminRules.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchGetRules, fetchSetRules } from 'api/admins'
import { IconButton, Input } from 'rsuite'

function AdminRules() {
  const queryClient = useQueryClient()
  const [rulesData, setRulesData] = useState<any[]>([])
  const [activeRule, setActiveRule] = useState(0)
  const [activeGroup, setActiveGroup] = useState(0)
  const [editableText, setEditableText] = useState('')
  const [currentRule, setCurrentRule] = useState<any>(null)
  const [currentGroup, setCurrentGroup] = useState<any>(null)

  const { data: rulesList } = useQuery(['rules'], fetchGetRules)

  if (rulesList) localStorage.setItem('rulesData', JSON.stringify(rulesList))

  const setRulesOptionsListMutation = useMutation(
    () => fetchSetRules(localStorage.getItem('rulesData')),
    {
      onSuccess: () => queryClient.invalidateQueries(['rules']),
    }
  )

  const handleShowSelectRules = (groupId: any, ruleId: any) => {
    setActiveGroup((prevState) => {
      return prevState === groupId ? null : groupId
    })
    setActiveRule((prevState) => {
      return prevState === ruleId ? null : ruleId
    })
  }

  useLayoutEffect(() => {
    setRulesData(rulesList)
  }, [rulesList, rulesData])

  const handleSaveRuleRow = async (groupId: any, ruleId: any) => {
    const rule = rulesData
      .find((group: any) => group.position === groupId)
      .rules.map((rule: any) => rule)
      .find((rule: any) => rule.position === ruleId)

    rule.name = editableText

    await localStorage.setItem('rulesData', JSON.stringify(rule))
    await setRulesOptionsListMutation.mutate()
  }

  const addRuleRowInGroup = async (groupId: any) => {
    const rule = rulesData.find((group: any) => group.position === groupId)
    rule.rules.push({
      position: rule.rules.length + 1,
      name: 'новая строка',
    })

    await localStorage.setItem('rulesData', JSON.stringify(rulesData))
    await setRulesOptionsListMutation.mutate()
  }

  const deleteRuleRowInGroup = async (groupId: any, ruleId: any) => {
    const rule = rulesData.find(
      (group: any) => group.position === groupId
    ).rules

    rule.splice(
      rule.findIndex((rule: any) => rule.position === ruleId),
      1
    )

    await localStorage.setItem('rulesData', JSON.stringify(rule))
    await setRulesOptionsListMutation.mutate()
  }

  const dragOverHandler = (e: any) => {
    e.preventDefault()
    if (e.target.className === styles.ruleRow) {
      e.target.style.boxShadow = '0px 0px 10px 1px gray'
    }
  }

  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = 'none'
  }

  const dragDragStartHandler = (e: any, group: any, rule: any) => {
    setCurrentGroup(group)
    setCurrentRule(rule)
  }

  const dragEndHandler = (e: any) => {
    e.target.style.boxShadow = 'none'
  }

  const dropHandler = async (e: any, group: any, rule: any) => {
    e.preventDefault()

    const currentIndex = currentGroup.rules.indexOf(currentRule)
    currentGroup.rules.splice(currentIndex, 1)
    const dropIndex = group.rules.indexOf(rule)
    group.rules.splice(dropIndex + 1, 0, currentRule)
    setRulesData(
      group?.rules?.map((g: any) => {
        if (g.position === group.rules.position) {
          group.rules.forEach((rule: any, index: any) => {
            return (rule.position = index + 1)
          })
          currentGroup.rules.forEach((rule: any, index: any) => {
            return (rule.position = index + 1)
          })
        }
        if (g.position === currentGroup.position) {
          group.rules.forEach((rule: any, index: any) => {
            return (rule.position = index + 1)
          })
          currentGroup.rules.forEach((rule: any, index: any) => {
            return (rule.position = index + 1)
          })
        }
        return g
      })
    )

    await localStorage.setItem('rulesData', JSON.stringify(rulesData))
    await setRulesOptionsListMutation.mutate()
  }

  // for (let key in currentGroup) {
  //   currentGroup.rules.position = key + 1
  // }

  return (
    <div className={styles.wrapper}>
      {rulesData?.map((group: any) => (
        <div key={group.position} className={styles.row}>
          <span style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
            {group.name}
          </span>
          <div className={styles.rules}>
            {group?.rules?.map((rule: any) => (
              <span
                draggable={true}
                onDragOver={(e: any) => dragOverHandler(e)}
                onDragLeave={(e: any) => dragLeaveHandler(e)}
                onDragStart={(e: any) => dragDragStartHandler(e, group, rule)}
                onDragEnd={(e: any) => dragEndHandler(e)}
                onDrop={(e: any) => dropHandler(e, group, rule)}
                className={styles.ruleRow}
                key={rule.position}
              >
                {activeRule === rule.position &&
                activeGroup === group.position ? (
                  <>
                    <Input
                      size="md"
                      defaultValue={rule.name}
                      onChange={(e) => {
                        setEditableText(e)
                      }}
                    />
                    <IconButton
                      appearance="subtle"
                      style={{ marginLeft: 'auto' }}
                      size="sm"
                      icon={<CheckOutlineIcon />}
                      onClick={() => {
                        handleSaveRuleRow(group.position, rule.position)
                        handleShowSelectRules(group.position, rule.position)
                      }}
                    />
                    <IconButton
                      appearance="subtle"
                      style={{ marginLeft: 'auto' }}
                      size="sm"
                      icon={<CloseOutlineIcon />}
                      onClick={() => {
                        deleteRuleRowInGroup(group.position, rule.position)
                        handleShowSelectRules(group.position, rule.position)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                      pos: {rule.position}
                    </span>
                    <span style={{ marginRight: 'auto' }}>{rule.name}</span>
                    {activeRule && activeGroup ? null : (
                      <IconButton
                        appearance="subtle"
                        style={{ marginLeft: '0.5rem' }}
                        size="sm"
                        icon={<EditIcon />}
                        onClick={() =>
                          handleShowSelectRules(group.position, rule.position)
                        }
                      />
                    )}
                  </>
                )}
              </span>
            ))}
            <IconButton
              style={{ width: 'fit-content', margin: '0 auto' }}
              appearance="subtle"
              size="sm"
              icon={<AddOutlineIcon />}
              onClick={() => addRuleRowInGroup(group.position)}
            >
              Добавить правило
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminRules
