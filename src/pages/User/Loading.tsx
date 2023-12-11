import { Card } from '../../components/Card'
import './styles.sass'

export const Loading = () => {
  return (
    <section className="user__section">
      <Card className="user__card">
        <h2 className="user__subtitle">User Info</h2>
        <div className="loading__container">
          {Object.keys(new Array(18).fill(null)).map((index) => (
            <div key={index} className="skeleton__container">
              <div className="skeleton line" />
              <div className="skeleton line" />
            </div>
          ))}
        </div>
        <div className="divider" />
        <h2 className="user__subtitle">Company Info</h2>

        <div className="loading__container">
          {Object.keys(new Array(4).fill(null)).map((index) => (
            <div key={index} className="skeleton__container">
              <div className="skeleton line" />
              <div className="skeleton line" />
            </div>
          ))}
        </div>
        <div className="divider" />
        <h2 className="user__subtitle">Payment Info</h2>

        <div className="loading__container">
          {Object.keys(new Array(3).fill(null)).map((index) => (
            <div key={index} className="skeleton__container">
              <div className="skeleton line" />
              <div className="skeleton line" />
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
