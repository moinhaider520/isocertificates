import Header from "@/Components/Common/Header";
import Avatar from "../../assets/images/xs/avatar4.jpg";
import { Draggable, Droppable } from "react-drag-and-drop";
import { useState } from "react";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
export default function Taskboard(){
    const [state, setState] = useState({
        dropable: [
          {
            type: "drophere",
            Data: "#L1011"
          },
          {
            type: "drophere",
            Data: "#L1008"
          }
        ],
        progress: [
          {
            type: "drophere",
            Data: "#L1010"
          },
        ],
        copmplete: [
          {
            type: "drophere",
            Data: "#L1005"
          },
        ]
      });
    
      const onDropPlanned = (data) => {
        const { dropable, progress, copmplete } = state;
        var dropab = dropable.filter(item => item.Data !== data.drophere);
        dropab.push({
          type: "drophere",
          Data: data.drophere
        });
    
        const filteredprogress = progress.filter(item => item.Data !== data.drophere);
        const filteredcopmplete = copmplete.filter(item => item.Data !== data.drophere);
    
        setState({
          dropable: [...dropab],
          progress: [...filteredprogress],
          copmplete: [...filteredcopmplete]
        });
      }
    
      const onDropProgress = (data) => {
        const { dropable, progress, copmplete } = state;
        var dropab = progress.filter(item => item.Data !== data.drophere);
        dropab.push({
          type: "drophere",
          Data: data.drophere
        });
    
        const filteredprogress = dropable.filter(item => item.Data !== data.drophere);
        const filteredcopmplete = copmplete.filter(item => item.Data !== data.drophere);
    
        setState({
          progress: [...dropab],
          dropable: [...filteredprogress],
          copmplete: [...filteredcopmplete]
        });
      }
    
      const onDropCompleted = (data) => {
        const { dropable, progress, copmplete } = state;
        var dropab = copmplete.filter(item => item.Data !== data.drophere);
        dropab.push({
          type: "drophere",
          Data: data.drophere
        });
    
        const filteredprogress = dropable.filter(item => item.Data !== data.drophere);
        const filteredcopmplete = progress.filter(item => item.Data !== data.drophere);
    
        setState({
          copmplete: [...dropab],
          dropable: [...filteredprogress],
          progress: [...filteredcopmplete]
        });
      }
    
      const renderDraggableItems = (data, tableName) => {
        return data.map((item, i) => (
          <Draggable key={i} type={item.type} data={item.Data}>
            <li>
              {item.Data === "#L1011" ? oneTabel() : null}
              {item.Data === "#L1008" ? twoTabel() : null}
              {item.Data === "#L1010" ? threeTabel() : null}
              {item.Data === "#L1005" ? fourTabel() : null}
            </li>
          </Draggable>
        ));
      }
    
      const oneTabel = () => {
        return (
            <li className="dd-item" data-id="1">
            <div className="dd-handle">#L1011</div>
            <div className="dd-content p-15">
                <h5>Job title</h5>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                <ul className="list-unstyled team-info m-t-20 m-b-20">
                    <li className="m-r-15"><small className="text-muted">Team</small></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar" /></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar" /></li>
                </ul>
                <hr />
                <div className="action">
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                    <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                </div>
            </div>
    </li>
        );
      }
    
      const twoTabel = () => {
        return (
            <li className="dd-item" data-id="1">
            <div className="dd-handle">#L1008</div>
            <div className="dd-content p-15">
                <h5>Job title</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <ul className="list-unstyled team-info m-t-20 m-b-20">
                    <li className="m-r-15"><small className="text-muted">Team</small></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                </ul>
                <hr />
                <div className="action">
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                    <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                </div>
            </div>
        </li>
        );
      }
    
      const threeTabel = () => {
        return (
            <li className="dd-item" data-id="1">
            <div className="dd-handle">#L1010</div>
            <div className="dd-content p-15">
                <h5>Job title</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <hr />
                <div className="action">
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                    <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                </div>
            </div>
        </li>
        );
      }
    
      const fourTabel = () => {
        return (
            <li className="dd-item" data-id="1">
            <div className="dd-handle">#L1005</div>
            <div className="dd-content p-15">
                <h5>Job title</h5>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <ul className="list-unstyled team-info m-t-20 m-b-20">
                    <li className="m-r-15"><small className="text-muted">Team</small></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                    <li><img src={Avatar} title="Avatar" alt="Avatar"/></li>
                </ul>
                <hr/>
                <div className="action">
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                    <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                </div>
            </div>
        </li>
        );
      }
    
      const { dropable, progress, copmplete } = state;
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content" class="taskboard">
        <div class="container-fluid">
        <Header headerText="Taskboard" mainNavigate="Dashboard" currentPage="Taskboard" />

        <div className="row clearfix row-deck">
        <div className="col-lg-4 col-md-12">
          <div className="card planned_task">
            <div className="header">
              <h2>Planned</h2>
            </div>
            <Droppable
              key={"1"}
              className="dd-list"
              types={['drophere']}
              onDrop={onDropPlanned}
            >
              <ul className="body taskboard">
                {renderDraggableItems(dropable, "dropable")}
                {dropable.length === 0 ? <div className="dd" data-plugin="nestable">
                  <div className="dd-empty"></div></div> : null}
              </ul>
              <ul className="Smoothie"></ul>
            </Droppable>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card progress_task">
            <div className="header">
              <h2>In progress</h2>
            </div>
            <Droppable
              key={"2"}
              className="dd-list"
              types={['drophere']}
              onDrop={onDropProgress}
            >
              <ul className="body taskboard">
                {renderDraggableItems(progress, "progress")}
                {progress.length === 0 ? <div className="dd" data-plugin="nestable">
                  <div className="dd-empty"></div></div> : null}
              </ul>
              <ul className="Smoothie"></ul>
            </Droppable>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card completed_task">
            <div className="header">
              <h2>Completed</h2>
            </div>
            <Droppable
              key={"3"}
              className="dd-list"
              types={['drophere']}
              onDrop={onDropCompleted}
            >
              <ul className="body taskboard">
                {renderDraggableItems(copmplete, "copmplete")}
                {copmplete.length === 0 ? <div className="dd" data-plugin="nestable">
                  <div className="dd-empty"></div></div> : null}
              </ul>
              <ul className="Smoothie"></ul>
            </Droppable>
          </div>
        </div>
      </div>
        </div>
    </div>

        </>
    )
}