import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Staff from './Staff';

class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: props.staffs,
            staff: {
                isHidden: true,
                current: -1
            }
        }
    }

    handleClick = (e) => {
        let id = e.target.getAttribute('keyId');
        if (this.state.staff.current === id) {
            this.setState({ staff: { isHidden: true } }); // an thong tin neu bam vao cung 1 id
        } else {
            this.setState((state, props) => ({
                staff: {
                    isHidden: false, // hien thong tin
                    current: id, // set current bang id vua click
                    ...state.staffs[id] // truyen moi gia tri cua phan tu thu 'id' vao state nay
                }
            }));
        }
    }

    render() {
        const listName = this.state.staffs.map((item) => <div keyId={item.id} class="col-lg-4 col-sm-6 border" onClick={this.handleClick}>{item.name}</div>);
        return (
            <div>
                <div class="row">{listName}</div>
                <div class="row">
                    { this.state.staff.isHidden ? null : <Staff staff={this.state.staff} /> }
                </div>
            </div>
        );  
    }
}

export default StaffList;