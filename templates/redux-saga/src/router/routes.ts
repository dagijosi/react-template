import Home from '../pages/Home';

export interface AppRoute {
  path?: string;
  index?: boolean;
  Component: React.ComponentType;
  children?: AppRoute[];
}

const routes = [
  { path: '/', Component: Home },
  // Add more routes here as needed
  // {
  //   Component: RequireAuth,
  //   children: [
  //     {
  //       Component: AuthLayout,
  //       children: [
  //         {
  //           path: '/supplier',
  //           Component: SupplierLayout,
  //           children: [
  //             {
  //               index: true,
  //               Component: SupplierList,
  //             },
  //             {
  //               path: 'detail',
  //               Component: CompanyDetail,
  //             },
  //             {
  //               path: 'add',
  //               Component: AddSupplier,
  //             },
  //             {
  //               path: 'edit/:id',
  //               Component: EditSupplier,
  //             },
  //           ],
  //         },
  //         // you can add more protected pages here
  //       ],
  //     },
  //   ],
  // },
];

export default routes;