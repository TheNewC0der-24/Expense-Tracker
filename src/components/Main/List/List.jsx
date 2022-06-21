import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './listStyles';

const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <i className='bx bx-rupee' />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`Rs.${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete style={{ color: '#ff0000' }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
            {transactions.length === 0 && (
                <Typography variant="subtitle1" align="center" style={{ color: 'lightslategrey' }}>
                    You haven't added any transactions yet -__-
                </Typography>
            )}
        </MUIList>
    )
}

export default List;