import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import * as ClassifiedsActions from '../../store/ducks/classifieds/actions'

import { FiPlusCircle } from 'react-icons/fi'
import { Classifieds } from '../../store/ducks/classifieds/types'

interface StateProps {
  classifieds: Classifieds[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const Home: React.FC<Props> = (props: Props) => {
  const { loadRequest } = props

  useEffect(() => {
    loadRequest()
  }, [loadRequest])

  return (
    <div>
      <div>
        <span>Classificados</span>

        <button type="button" className="btn btn-secondary">
          <FiPlusCircle size={22} /> <span>Novo classificado</span>
        </button>
      </div>

      <div></div>

      <div className="alert alert-dark position-absolute bottom-0 start-50 translate-middle-x">
        <div className="badge bg-secondary">
          <span>4</span>
        </div>{' '}
        classificado(s)
      </div>
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
