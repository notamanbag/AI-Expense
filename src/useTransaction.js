import { useContext } from "react";
import { expenseCategories,incomeCategories,resetCategories } from "./Constants/Category";
import { expenseTrackerContext } from "./Context/Context";


const useTransaction = (title)=>{
    resetCategories();
    const {transactions}  = useContext(expenseTrackerContext);
    const transactionPerType= transactions.filter((t)=>t.type==title);

    const total = transactionPerType.reduce((acc,currVal)=>acc+=currVal.amount,0);

    const categories = title === 'Income' ? incomeCategories:expenseCategories;
    

    transactionPerType.forEach(element => {
        const category  = categories.find((c)=>c.type === element.category);
        if(category) category.amount +=element.amount;
        
    });

    const filterdCategories = categories.filter((c)=>c.amount>0);

    const chartData = {
        datasets:[
            {
                data:filterdCategories.map((c)=>c.amount),
                backgroundColor:filterdCategories.map((c)=>c.color)
            }
        ],
        labels:filterdCategories.map((c)=>c.type)
    }
    return {filterdCategories,total,chartData}

}
export default useTransaction;