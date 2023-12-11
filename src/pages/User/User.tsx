import { Card } from '../../components/Card'
import { ListItem } from '../../components/ListItem'
import { useUserInfos } from '../../queries/user'
import { useAuthStore } from '../../store/useAuthStore'
import { Error } from './Error'
import { Loading } from './Loading'
import './styles.sass'
import dayjs from 'dayjs'

export const User = () => {
  const { id } = useAuthStore((state) => state.userInfo)
  const { data, isLoading, isError } = useUserInfos(id)

  if (isError) return <Error />

  if (isLoading) return <Loading />

  return (
    <section className="user__section">
      <Card className="user__card">
        <h2 className="user__subtitle" data-testid="cypress-title-userInfo">
          User Info
        </h2>
        <dl className="user__list ">
          <div className="user__avatar__container">
            <img
              src={data?.image}
              className="user__avatar w-12 rounded-full bg-gray-50 "
              alt=""
            />
            <ListItem
              label={'Name'}
              value={`${data?.firstName} ${data?.lastName}`}
            />
          </div>
          <ListItem label={'Maiden Name'} value={data?.maidenName} />
          <ListItem label={'username'} value={data?.username} />
          <ListItem label={'Email address'} value={data?.email} />
          <ListItem label={'Age'} value={data?.age} />
          <ListItem label={'Domain'} value={data?.domain} />
          <ListItem
            label={'Birth Date'}
            value={dayjs(data?.birthDate).format('MM/DD/YYYY')}
          />
          <ListItem label={'Phone'} value={data?.phone} />
          <ListItem label={'EIN'} value={data?.ein} />
          <ListItem label={'SSN'} value={data?.ssn} />
          <ListItem label={'University'} value={data?.university} />
          <ListItem label={'Gender'} value={data?.gender} />
          <ListItem label={'Height'} value={data?.height} />
          <ListItem label={'weight'} value={data?.weight} />
          <ListItem label={'Blood Group'} value={data?.bloodGroup} />
          <ListItem label={'Eye Color'} value={data?.eyeColor} />
          <ListItem label={'Hair Color'} value={data?.hair?.color} />
          <ListItem label={'Hair Type'} value={data?.hair?.type} />
        </dl>
        <div className="divider" />
        <h2 className="user__subtitle">Company Info</h2>
        <dl className="user__list ">
          <ListItem label={'Name'} value={data?.company?.name} />
          <ListItem label={'Title'} value={data?.company?.title} />
          <ListItem label={'Department'} value={data?.company?.department} />
          <ListItem
            label={'Address'}
            value={`${data?.company?.address?.address} ${data?.company?.address?.city}, ${data?.company?.address?.state} ${data?.company?.address?.postalCode}`}
          />
        </dl>

        <div className="divider" />

        <h2 className="user__subtitle">Payment Info</h2>
        <dl className="user__list ">
          <ListItem label={'Card Brand'} value={data?.bank?.cardType} />
          <ListItem
            label={'Card Number'}
            value={'**** **** **** ' + data?.bank?.cardNumber?.substring(13)}
          />
          <ListItem label={'Currency'} value={data?.bank?.currency} />
        </dl>
      </Card>
    </section>
  )
}
