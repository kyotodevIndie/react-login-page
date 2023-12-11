import './styles.sass'

type ListItemProps = {
  label?: string
  value?: string | number | undefined
}

export const ListItem = ({ label, value }: ListItemProps) => {
  return (
    <div>
      <dt className="dt__label">{label}</dt>
      <dd className="dd__label mt-[-4px]">{value}</dd>
    </div>
  )
}
