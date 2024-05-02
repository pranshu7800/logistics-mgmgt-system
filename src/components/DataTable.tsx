import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Collapse from '@mui/material/Collapse';
import { visuallyHidden } from '@mui/utils';
import SearchField from './SearchField';
import { Radio } from '@mui/material';
import { Data } from '../interface/Data';
import { DataTableProps } from '../interface/DataTable'
import ViewDrawer from './ViewDrawer';
import { useSelector } from 'react-redux';
import EditorModal from './EditModal';
import EditModal from './EditModal';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array?.map((el, index) => [el, index] as [T, number]);
    stabilizedThis?.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis?.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'id',
        numeric: true,
        disablePadding: false,
        label: 'Shipment Id',
    },
    {
        id: 'shippingMode',
        numeric: true,
        disablePadding: false,
        label: 'Shipping',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price (Rs)',
    },
    {
        id: 'paymentMode',
        numeric: true,
        disablePadding: false,
        label: 'Payment',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'customer',
        numeric: true,
        disablePadding: false,
        label: 'Customer',
    },
    {
        id: 'assignee',
        numeric: true,
        disablePadding: false,
        label: 'Assignee',
    },
    {
        id: 'shipmentDate',
        numeric: true,
        disablePadding: false,
        label: 'Shipment Date',
    },
    {
        id: 'arrivalDate',
        numeric: true,
        disablePadding: false,
        label: 'Arrival Date',
    },
    {
        id: 'origin',
        numeric: true,
        disablePadding: false,
        label: 'Origin',
    },
    {
        id: 'destination',
        numeric: true,
        disablePadding: false,
        label: 'Destination',
    }
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    Select
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: string;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;
    const [editShipment, setEdit] = React.useState(false);
    const [viewShipment, setView] = React.useState(false);
    const shipment = useSelector((state: any) => state.shipment.shipments.find((shipment: any) => shipment.id === numSelected));

    return (
        <>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(numSelected && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
                    })
                }}
                style={{ minHeight: 36, marginTop: 5, marginBottom: 5 }}
            >
                {numSelected && (
                    <>
                        <Typography
                            sx={{ flex: '1 1 100%' }}
                            color="inherit"
                            variant="subtitle1"
                            component="div"
                        >
                            {numSelected} selected
                        </Typography>

                        <IconButton size='small' onClick={() => setEdit(true)}>
                            <EditIcon color='primary' />
                        </IconButton>
                        <IconButton size='small' onClick={() => setView(true)}>
                            <VisibilityIcon color='primary' />
                        </IconButton>
                    </>
                )}
            </Toolbar>
            {viewShipment && (
                <ViewDrawer open={viewShipment} toggle={setView} shipment={shipment} />)
            }
            {
                editShipment && (
                    <EditModal open={editShipment} toggle={setEdit} shipment={shipment} />)
            }
        </>
    );
}
export default function DataTable({ rows }: DataTableProps) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [selectedShipmentId, setSelectedShipmentId] = React.useState<string>("");
    const error = useSelector((state: any) => state.shipment.error);

    React.useEffect(() => {
        console.log(error)
        if (error) {
            throw new Error(error);
        }
    }, [error]);

    // const shipment = useSelector((state: any) => state.shipment.shipments.find((shipment: any) => shipment.id === selectedShipmentId));

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
        if (selectedShipmentId === id) {
            setSelectedShipmentId("");
        } else {
            setSelectedShipmentId(id);
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id: string) => selectedShipmentId === id;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy))?.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, rows?.map(row => row)],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container>
                <Grid item xs={12} pt={2} pr={2}>
                    <Paper sx={{ width: "100%", mb: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }} elevation={0}>
                        <Grid item xs={12} pt={2} px={2}>
                            <SearchField />
                        </Grid>
                        <EnhancedTableToolbar numSelected={selectedShipmentId} />
                        <Divider />
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750, width: "max-content" }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows?.length}
                                />
                                <TableBody>
                                    {visibleRows?.map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Radio
                                                        color='primary'
                                                        checked={selectedShipmentId === row.id}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>{row.shippingMode}</TableCell>
                                                <TableCell>{row.price}</TableCell>
                                                <TableCell>{row.paymentMode}</TableCell>
                                                <TableCell >
                                                    <Chip
                                                        label={row.status}
                                                        color={row.status === 'Delivered' ? 'success' :
                                                            row.status === 'In Transit' ? 'info' :
                                                                row.status === 'Clearance' ? 'warning' :
                                                                    row.status === 'Out for Delivery' ? 'primary' : 'error'}
                                                        size='small'
                                                        variant='outlined'
                                                    />
                                                </TableCell>
                                                <TableCell >{row.customer}</TableCell>
                                                <TableCell >{row.assignee}</TableCell>
                                                <TableCell >{row.shipmentDate}</TableCell>
                                                <TableCell >{row.arrivalDate}</TableCell>
                                                <TableCell >{row.origin}</TableCell>
                                                <TableCell >{row.destination}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows?.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
