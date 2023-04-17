import { Link } from 'react-router-dom'
import './../styles/HeaderAdmin.css'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { callAuthDelete } from '../actions/app'

const HeaderAdmin = ({ callAuthDelete }) => {

    const menu = [
        {
            label: 'Cadastros',
            child: [
                {
                    label: 'Usuário',
                    to: '/users',
                    icon: 'fas fa-user'
                },
                {
                    label: 'Oficiais',
                    to: '/collaborators',
                    icon: 'fas fa-users'
                },
                {
                    label: 'Batalhão',
                    to: '/companies',
                    icon: 'fas fa-building'
                },
                {
                    label: 'Companhia',
                    to: '/company-units',
                    icon: 'fas fa-map-pin'
                },
                {
                    label: 'Viaturas',
                    to: '/vehicles',
                    icon: 'fas fa-car'
                }
            ]
        }
    ]

    const logout = () => {
        Swal.fire({
            title: 'Deseja se desconectar do sistema?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                callAuthDelete()
            }
        })
    }

    return (
        <header className='px-4'>
            <div className="logo">
                <Link to={'/'} className='d-block'><img src="/assets/img/logo.png" alt="Espartaco Soluções" className='img-fluid' /></Link>
            </div>
            <div className='menus ml-4'>
                {menu.map((a, ai) => (
                    <div className='menus-item' key={ai}>
                        <span className='cursor-pointer'>{a.label}</span>
                        <div className='menus-sub'>
                            <div className='menus-sub-items'>
                                {a.child.map((b, bi) => (<Link key={bi} to={b.to}><i className={b.icon}></i>{b.label}</Link>))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='icons flex-fill d-flex justify-content-end'>
                <div className='icons-item notification mr-3 cursor-pointer'>
                    <i className='fas fa-bell fa-2x'></i>
                </div>
                <div className='icons-item profile mr-3 cursor-pointer'>
                    <i className='fas fa-user fa-2x'></i>
                </div>
                <div className='icons-item logout cursor-pointer' onClick={logout}>
                    <i className='fas fa-sign-out-alt fa-2x'></i>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            callAuthDelete
        },
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin)