import React,{useState,useContext} from 'react'
import {TextField,Typography ,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import useSTyles from './styles'
import { expenseTrackerContext } from '../../../Context/Context'
import {v4 as uuidv4} from 'uuid' 
import { incomeCategories } from '../../../Constants/Category'
import { expenseCategories } from '../../../Constants/Category'
import formatDate from '../../../Utils/FormatDate'
const initialState = {
    amount :'',
    category :'',
    type:'Income',
    date : formatDate(new Date())
}
const Form = () => {
    const classes = useSTyles();
    const [formData, setformData] = useState(initialState);
    const {addTransaction} = useContext(expenseTrackerContext);

    const createTransaction = ()=>{
        const trasn = {...formData,amount:Number(formData.amount),id:uuidv4()}
        addTransaction(trasn);
        setformData(initialState);
    }
    
    const selectedCategories = formData.type==='Income'?incomeCategories:expenseCategories;
    console.log(selectedCategories);

    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={12} >
            {/* gutter bottom is used to provide margin for text */}
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography> 
            </Grid>
            <Grid xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e)=>setformData({...formData,type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                 <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e)=>setformData({...formData,category:e.target.value})}>
                        {selectedCategories.map((c)=>
                            <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                        )}
                      
                    </Select>
                 </FormControl>
            </Grid>
            <Grid item xs={6}>
                 <TextField type="number" fullWidth label="AMount" value={formData.amount} onChange={(e)=>setformData({...formData,amount:e.target.value})} />
                 
            </Grid>
            <Grid item xs={6}>
                 <TextField type="date" fullWidth value={formData.date} onChange={(e)=>setformData({...formData,date:formatDate(e.target.value)})}/>
                 
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create </Button>

        </Grid>
            
        </div>
    )
}

export default Form
