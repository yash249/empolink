import S3FileUpload from 'react-s3';
import React, { Component } from 'react'
import { uploadFile } from 'react-s3';

const config = {
    bucketName: 'myBucket',
    dirName: 'photos', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
}

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}> File Upload</h1>
                <div>
                
                </div>
            </>
        )
    }
}

export default RegisterPage;