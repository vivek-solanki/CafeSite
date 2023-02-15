import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import order from '../Assets/order.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import * as yup from 'yup'

const Order = () => {
    const data = {
        name: '',
        email: '',
        phone: '',
        food: '',
        city: '',
        address: ''
    }
    const validate = yup.object().shape({
        name: yup.string()
            .required('Required'),
        email: yup.string()
            .required('Required'),
        phone: yup.string()
            .required('Required'),
        food: yup.string()
            .required('Required'),
        city: yup.string()
            .required('Required'),
        address: yup.string()
            .required('Required'),
    })

    const submit = (values) => {
        const url = 'http://localhost:4000/orders';
        axios.post(url, {
            "Name": values.name,
            "email": values.email,
            "phone": values.phone,
            "food": values.food,
            "city": values.city,
            "address": values.address
        })
    }

    return (
        <>

            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            >
                <section className="order" id="order">

                    <h1 className="heading"> <span>order</span> now </h1>

                    <div className="row">

                        <div className="image">
                            <img src={order} alt="" />
                        </div>

                        <Form className='d-flex flex-column align-items-center'>
                            <Field type="text" name='name' className='form-control hgt' placeholder="Name" />
                            <p className='text-danger valid'><ErrorMessage name='name' /></p>
                            <Field type="email" name='email' className='form-control hgt' placeholder="Email" />
                            <p className='text-danger valid'><ErrorMessage name='email' /></p>
                            <Field type="text" name='phone' className='form-control hgt' placeholder="Number" />
                            <p className='text-danger valid'><ErrorMessage name='phone' /></p>
                            <Field type="text" name='food' className='form-control hgt' placeholder="Food Name" />
                            <p className='text-danger valid'><ErrorMessage name='food' /></p>
                            <Field type='text' name='city' className='form-control hgt' placeholder="City" />
                            <p className='text-danger valid'><ErrorMessage name='city' /></p>
                            <Field type='text' name='address' className='form-control hgt' placeholder="Address" />
                            <p className='text-danger valid'><ErrorMessage name='address' /></p>
                            <button type="submit" value="place order" className="btn" >Place Order</button>
                        </Form>
                    </div>
                </section>
            </Formik>
        </>
    );
}

export default Order;