import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import { Classifieds } from '../../store/ducks/classifieds/types'
import * as ClassifiedsActions from '../../store/ducks/classifieds/actions'

import Card from '../../components/Card'
import Header from '../../components/Header'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './styles.css'

interface StateProps {
  classifieds: Classifieds[]
}

interface DispatchProps {
  loadRequest(): void
  loading: boolean
  error: boolean
}

type Props = StateProps & DispatchProps

const Home: React.FC<Props> = (props: Props) => {
  const { loadRequest, loading, classifieds } = props

  useEffect(() => {
    loadRequest()
  }, [loadRequest])

  classifieds.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    return dateB.valueOf() - dateA.valueOf()
  })

  return (
    <div className="home-body">
      <Header />

      {!loading ? (
        <>
          <>
            {classifieds.length > 0 ? (
              <>
                <div className="cards">
                  {classifieds.map(({ id, title, date, description }) => (
                    <div key={id} className="cards-body">
                      <Card
                        key={id}
                        date={new Date(date)}
                        title={title}
                        description={description}
                      />
                    </div>
                  ))}
                </div>

                <div className="alert position-absolute bottom-0 start-50 translate-middle-x">
                  <div className="badge bg-secondary">
                    <span>{classifieds.length}</span>
                  </div>{' '}
                  classificado(s)
                </div>
              </>
            ) : (
              <h1 className="no-content">Nenhum classificado por aqui!</h1>
            )}
          </>
        </>
      ) : (
        <div className="loader">
          <Loader type="Oval" color="#c8e7ff" height={200} width={200} />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  classifieds: state.classifieds.data,
  loading: state.classifieds.loading,
  error: state.classifieds.error
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ClassifiedsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
