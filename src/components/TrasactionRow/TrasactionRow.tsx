

interface TransactionRowPros{
  
  title:string;
  type:'entrada'|'saque';
  value:string;
  category:string;
  createdAt:string;

}

export function TransactionRow({title,category,type,value,createdAt}:TransactionRowPros){
  return (  
    <tr>
      <td className="title">
          {title}
      </td>
      <td className={type}>
       {type === 'saque' ? '- ':''}{value}
      </td>
      <td>
        {category}
      </td>
      <td>{createdAt}</td>
    </tr>

  )

}