import getClient from "./client";
import parseError from "./parseError";

interface Test {
    id: string;
}

function Get() {
    const GetmyProblems = async () => {
        let data = await getClient().get('/myProblem').then(res => {
            // console.log(res.data.data);
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }
    const GetmyWorkbook = async () => {
        let data = await getClient().get('/sendMineWorkbook').then(res => {
            console.log(res.data.data);
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }
    const GetallProblems = async () => {
        let data = await getClient().get('/sendProblem').then(res => {
            // console.log(res.data.data);
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }
    const GetsomeofProblems = async ({ id }: Test) => {
        let data = await getClient().get('/detailProblem?id=' + id).then(res => {
            console.log(res);
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }

    const GetallWorkbooks = async () => {
        let data = await getClient().get('/sendAllWorkbook').then(res => {
            // console.log(res.data.data);
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }
    const GetsomeofWorkbooks = async ({ id }: Test) => {
        let data = await getClient().get('/detailWorkbook?id=' + id).then(res => {
            // console.log(res);
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }

    const Getallcommunity = async () => {
        let data = await getClient().get('/sendPost').then(res => {
            console.log(res);
            // alert("test");
            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }
    const Getsomeofcommunity = async ({ id }: Test) => {
        let data = await getClient().get('/detailPost?id=' + id).then(res => {
            console.log(res);

            return res.data.data;
        }).catch(err => {
            throw parseError(err);
        })
        return data
    }

    return { GetmyProblems, GetmyWorkbook, GetallProblems, GetsomeofProblems, GetallWorkbooks, GetsomeofWorkbooks, Getallcommunity, Getsomeofcommunity };

}

export default Get;