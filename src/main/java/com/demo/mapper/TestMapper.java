package com.demo.mapper;

import com.demo.pojo.Test;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by Administrator on 2018/5/2.
 */
@Mapper
public interface TestMapper {
    @Select("SELECT * from test")
    public List<com.demo.pojo.Test> select();
    @Select("SELECT * FROM TEST WHERE ID=#{id}")
    public com.demo.pojo.Test byId(@Param("id") int id);
    public int updateTest(Test test);
    @Delete("delete from test where id=#{id}")
    public int delete(Integer id);
    public int addTest(Test test);
}
