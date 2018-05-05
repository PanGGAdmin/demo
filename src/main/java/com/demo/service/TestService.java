package com.demo.service;

import com.demo.mapper.TestMapper;
import com.demo.pojo.Test;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018/5/2.
 */
@Service
public class TestService {
    @Autowired
    private TestMapper mapper;
    /**
     * 查询所有
     * @return
     */
    public List<Test> select(){
        return mapper.select();
    }

    /**
     * 删除
     * @param id
     * @return
     */
    public int delete(int id)
    {
        return mapper.delete(id);
    }

    /**
     * byid查询
     * @param id
     * @return
     */
    public Test testById(int id)
    {
        return mapper.byId(id);
    }
    public int updateTest(Test test){
        return  mapper.updateTest(test);
    }

    /**
     * 新增
     * @param test
     * @return
     */
    public  int addUser(Test test){
        return mapper.addTest(test);
    }
}
