
/* href={"/dashboard/view/"+(props.plan.name)} */
  {/* <a>coucou</a> */}


const subMenuView = ({ children, ...props }) => (
  <div>
    {props.plans.map(plan => (<a class="dropdown-item" href={"/dashboard/view/"+(plan.selector)}>
       {plan.name}
     </a>
    ))}
  </div>

);

export default subMenuView;
