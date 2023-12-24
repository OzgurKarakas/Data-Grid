import { GridComponent, ColumnsDirective, ColumnDirective,Page,Inject,Filter, Edit, EditSettingsModel, ToolbarItems, Toolbar } from '@syncfusion/ej2-react-grids';
import {MaskedTextBoxComponent} from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import data from '../data.json';


const SearchFilter = () => {
    const editOptions: EditSettingsModel = {allowEditing:true,allowAdding:true,allowDeleting:true,mode:'Batch'};
    const toolbarOptions: ToolbarItems[]=['Add','Edit','Delete','Update','Cancel'];

    function editTemplate(args:any){
        return (<MaskedTextBoxComponent value={args.CurrentSalary} mask='*.***.**' id='CurrentSalary' />);
    }

    function filterTemplate(props: any) {
        const location = DataUtil.distinct(data, 'Location') as string[];

        return <DropDownListComponent dataSource={location} change={onChange} />
    }

    let grid: any | null = null
    function onChange(args: any) {
        grid && grid.filterByColumn('Location','equal',args.value)
    }

    return (
        <div style={{margin:'2%'}}>
            <div><p style={{fontSize:'1.2rem',fontWeight:'bold'}}>Data Grid (Search & DropDown Filter)</p></div>
            <GridComponent dataSource={data} 
            allowPaging={true}
            allowFiltering={true}
            pageSettings={{pageSize:10}}
            editSettings={editOptions}
            toolbar ={toolbarOptions}
            ref={g => grid = g}
            >
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeName' headerText='Employee Name' width='100' />
                    <ColumnDirective field='Designation' width='100' />
                    <ColumnDirective field='Mail' width='150' />
                    <ColumnDirective field='Location' width='100' editType='dropdownedit' filterTemplate={filterTemplate}/>
                    <ColumnDirective field='Status' width='100' editType='dropdownedit' filter={{type:'CheckBox'}}/>
                    <ColumnDirective field='Rating' width='100' editType='numericedit'/>
                    <ColumnDirective field='SoftwareProficiency' headerText='Software Proficiency' width='100' />
                    <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='100' editTemplate={editTemplate}/>
                    <ColumnDirective field='Address' width='100' editType='dropdownedit'/>
                </ColumnsDirective>
                <Inject services={[Page,Filter,Edit,Toolbar]}/>
            </GridComponent>
        </div>
    )
}

export default SearchFilter