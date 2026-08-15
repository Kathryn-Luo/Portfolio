import { CircleDot, Bot, GitPullRequestArrow, MessageSquareCode, CircleCheck, MoveRight, MoveDown, LucideIcon } from "lucide-react";

type WorkflowNodeProps = {
  icon: LucideIcon;
  label: string;
  description?: string;
  color?: 'primary'
  className?: string,
  variant?: 'default' | 'primary';
}
type WorkflowEmptyNodeProps = {
  empty: true;
}
type WorkflowArrowDownNodeProps = {
  arrow: 'down';
}
type WorkflowArrowRightNodeProps = {
  arrow: 'right';
}
type WorkflowItemProps = WorkflowNodeProps | WorkflowEmptyNodeProps | WorkflowArrowDownNodeProps | WorkflowArrowRightNodeProps;


function WorkflowArrow({ type }: { type: 'right' | 'down' }) {
  return (
    <div className="flex items-center justify-center text-slate-300">
      {type === 'down' ? <MoveDown className="size-8" /> : <MoveRight className="size-8" />}
    </div>
  )
}

function WorkflowItem(props: WorkflowItemProps) {
  if ("empty" in props) {
    return <div />
  }
  if ("arrow" in props) {
    return <WorkflowArrow type={props.arrow} />
  }
  return <WorkflowNode {...props} />
}
function WorkflowNode({
  icon: Icon,
  label,
  description,
  className,
  variant
}: WorkflowNodeProps) {
  const isPrimary = variant === 'primary'
  return (
    <div className={`flex border rounded-xl py-3.5 px-4 relative 
      ${variant === 'primary' ? 'border-primary bg-accent-soft text-primary' : 'border-border bg-white'} ${className}`}>
      <div className="flex-none pr-2 flex items-center">
        <Icon className="size-7" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-md font-bold text-font">{label}</h3>
        <p className="text-xs leading-tight">{description}</p>
      </div>
      {isPrimary && (
        <div className="absolute  h-full bg-primary/40 blur-3xl w-full -z-10">

        </div>
      )}
    </div>
  )
}

const flowList: WorkflowItemProps[] = [
  {
    icon: CircleDot,
    label: "Github Issue",
    description: "Feature / Bug",
  },
  {
    arrow: 'right'
  },
  {
    icon: Bot,
    label: "AI Agent",
    description: "Claude / Codex",
    variant: 'primary',
  },
  {
    arrow: 'right'
  },
  {
    icon: GitPullRequestArrow,
    label: "Pull Request"
  },
  {
    empty: true
  },
  {
    empty: true
  },
  {
    arrow: 'down'
  },
  {
    empty: true
  },
  {
    arrow: 'down'
  },
  {
    empty: true
  },
  {
    empty: true
  },
  {
    icon: MessageSquareCode,
    label: "Code Review",
    description: 'AI + Human'
  },
  {
    arrow: 'right'
  },
  {
    icon: CircleCheck,
    label: "Merge",
  },
]

export function HeroWorkflow() {
  return (
    <div className="relative pl-6 py-20">
      <div className="bg-grid absolute inset-0 z-[-1]" />
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_30px_1fr_30px_1fr]">
        {flowList.map((flow, index) => (
          <WorkflowItem
            key={index}
            {...flow}
          />
        ))}
      </div>
    </div>

  );
}